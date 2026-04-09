My Site
========

This is my site developed in [Jekyll](https://jekyllrb.com).

## Setup

Install dependencies:

    npm install

## Run

### Development Mode

Start Jekyll development server:

    jekyll serve

### CSS Compilation

Stylesheets are written in [Stylus](https://stylus-lang.com/) and compiled to CSS.

**One-time build:**

    npm run build:css

**Watch for changes (auto-compile):**

    npm run watch:css

Or use VS Code: Press `Cmd+Shift+B` to build, or run "Watch Stylus" task from Command Palette.

### Source Files

- **Stylus source:** `_styl/main.styl`
- **CSS output:** `css/style.css`
- **Components:** `_styl/components/`
