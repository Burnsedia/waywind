import fs from 'fs';
import path from 'path';
import { resolveConfig } from 'tailwindcss/resolveConfig';
import os from 'os';
import { execSync } from 'child_process';

export function generateTheme({ config = 'tailwind.config.js', reload = false, output }) {
  const resolvedPath = path.resolve(process.cwd(), config);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`❌ Cannot find ${config}`);
    process.exit(1);
  }

  const userConfig = require(resolvedPath);
  const fullConfig = resolveConfig(userConfig);
  const c = fullConfig.theme.colors || {};

  const get = (key, fallback) => c[key] || fallback;

  const css = `
* {
  font-family: "JetBrainsMono Nerd Font", monospace;
  font-size: 14px;
}

window#waybar {
  background-color: ${get('base-100', '#0f172a')};
  color: ${get('base-content', '#f1f5f9')};
}

#workspaces button.active {
  background-color: ${get('primary', '#2563eb')};
  color: white;
}

#clock, #pulseaudio, #battery {
  background-color: ${get('secondary', '#64748b')};
  padding: 0 10px;
}
`;

  const outputPath = output.replace(/^~/, os.homedir());
  fs.writeFileSync(outputPath, css.trim());
  console.log(`✅ Theme written to ${outputPath}`);

  if (reload) {
    try {
      execSync('pkill waybar && waybar &', { stdio: 'inherit' });
    } catch {
      console.error('⚠️ Could not reload Waybar');
    }
  }
}

