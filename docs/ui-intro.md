
---

# 🎨 UI Architecture & Component Library

## 🚀 The "No-Library" Philosophy

Unlike other dashboards that clutter your project with heavy, rigid UI frameworks (like MUI or Ant Design), **Hatti** is built from the ground up using a **Pure Tailwind CSS + TypeScript** approach.

This means you get **100% control** over every pixel. Every component you see is a native React component styled with Tailwind utility classes. No more fighting with global CSS overrides or bloated bundles.

### Why this matters for you:

* **Ultra Lightweight:** Your app stays fast because there's no massive CSS/JS library loading in the background.
* **Infinite Customization:** Want to change a button's padding or a modal's blur? Just edit the Tailwind classes in the component file.
* **Type Safety:** Every component is strictly typed with TypeScript, giving you perfect Autocomplete and zero "runtime" surprises.

---

## 🏗️ Core Engineering Principles

In this section, we will document every component available in the Hatti UI Kit. For each item, we provide:

1. **Direct Usage:** Ready-to-copy code snippets.
2. **Prop Definitions:** Detailed tables explaining every customizable attribute.
3. **Theming Hooks:** How the component connects to your global design tokens.

### 🛠️ What's Under the Hood?

We have carefully selected only the essential "helper" utilities to keep the experience smooth without adding bulk:

* **[Tailwind CSS v4]:** The primary styling engine for lightning-fast UI development.
* **[Lucide React]:** A lightweight, consistent icon set used across the entire dashboard.
* **[Framer Motion]:** Used sparingly for smooth, high-end micro-interactions (Modals, Toggles).
* **[Zustand]:** Orchestrates the state for interactive components like the UI Customizer.

---

## 📂 Component Categories

Our library is organized to help you build interfaces faster:

| Category | Included Components |
| --- | --- |
| **Actions** | Buttons, Icon Buttons, Button Groups |
| **Form Controls** | Inputs, Selects, Checkboxes, Radios, Toggles |
| **Feedback** | Progress Bars, Spinners, Skeleton Loaders |
| **Overlays** | Modals, Drawers, Tooltips, Popovers |
| **Data Views** | Cards, Tables, Badges, Avatars |

---

## ♿ Accessibility & Standards

Even though we don't use a pre-built library, we haven't skipped on the essentials. Every Hatti component follows:

* **Semantic HTML:** Using correct tags (`<button>`, `<input>`, `<nav>`) for SEO and screen readers.
* **Focus Management:** Clear focus rings for keyboard navigation.
* **RTL Readiness:** Components are designed to flip gracefully for Urdu/Arabic support.

---
