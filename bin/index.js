#!/usr/bin/env node
import { program } from 'commander';
import { generateTheme } from '../lib/generate.js';

program
  .name('waywind')
  .description('Generate Waybar themes from TailwindCSS/DaisyUI config')
  .option('-c, --config <file>', 'Path to tailwind.config.js', 'tailwind.config.js')
  .option('-r, --reload', 'Reload Waybar after generating', false)
  .option('-o, --output <file>', 'Output CSS file', '~/.config/waybar/style.css')
  .parse();

const options = program.opts();

generateTheme({
  config: options.config,
  reload: options.reload,
  output: options.output,
});

