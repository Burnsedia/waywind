
# 🌬️ waywind

**waywind** is a CLI tool that generates a [Waybar](https://github.com/Alexays/Waybar) CSS theme from your TailwindCSS (and DaisyUI) config.  
Built for Arch Linux, Hyprland, and rice-loving frontend devs who want their bar to match their code.

---

## ✨ Features

- 🎨 Converts TailwindCSS or DaisyUI color themes to Waybar-compatible CSS
- ⚡ Instant generation with one command
- 🔁 Optional auto-reload of Waybar after theme generation
- 🧠 Designed for theming-focused devs using Hyprland + Tailwind

---

## 🚀 Installation

### Using npm:

```bash
npm install -g waywind
```

---

## 🧪 Usage

```bash
waywind --config tailwind.config.js --output ~/.config/waybar/style.css --reload
```

### Options

| Option              | Description                                      |
|---------------------|--------------------------------------------------|
| `-c`, `--config`     | Path to your `tailwind.config.js`               |
| `-o`, `--output`     | Output CSS file path (default: `~/.config/waybar/style.css`) |
| `-r`, `--reload`     | Reload Waybar after generating theme            |

---

## 📦 Example

```bash
waywind --config ./themes/synthwave.config.js --reload
```

Will generate a Waybar CSS theme matching your Synthwave Tailwind/DaisyUI colors and reload Waybar automatically.

---

## 💻 Example Output

```css
window#waybar {
  background-color: #0f172a; /* base-100 */
  color: #f1f5f9;           /* base-content */
}

#workspaces button.active {
  background-color: #2563eb; /* primary */
}
```

---

## 🔧 Requirements

- Node.js ≥ 18
- A valid `tailwind.config.js` file with `theme.colors` (or DaisyUI enabled)
- Waybar (recommended with Hyprland)

---

## 🐧 For Arch & Hyprland Users

`waywind` is designed with:
- 💻 Hyprland + Waybar
- 🧙 r/unixporn dotfiles users
- 🌈 frontend devs who use TailwindCSS or DaisyUI

---

## 📜 License

[GLP](./LICENSE.md)

---

> Made with ❤️ for ricing your system by [@yourhandle](https://github.com/yourhandle)
