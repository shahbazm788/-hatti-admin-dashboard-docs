
---

# 🔘 Buttons

A highly customizable button component that serves as the primary trigger for actions. It supports various visual states, sizes, and built-in loading indicators while synchronizing with the global design system.

---

## 🚀 Overview

The **Button** is a standard action component featuring multiple semantic variants and support for icons and loading states. It is built to be flexible, accessible, and theme-aware.

### 💡 Features:

* **TypeScript Powered:** Full IntelliSense support for all props and variants.
* **Icon Support:** Seamless integration with `lucide-react` or any React element.
* **State Aware:** Built-in handling for `loading` and `disabled` states.
* **Dynamic Theming:** Automatically inherits global radius and brand colors.

---

## 💻 Usage

```tsx
import Button from '@/ui/components/buttons/Button';
import { Plus, Trash2 } from 'lucide-react';

// 1. Basic usage
<Button variant="primary">Click Me</Button>

// 2. With icon and loading state
<Button 
  variant="danger" 
  icon={<Trash2 size={16} />} 
  isLoading={loading}
  onClick={handleDelete}
>
  Delete Item
</Button>

// 3. Circle icon button (Perfect for Toolbars)
<Button variant="secondary" isCircle icon={<Plus size={20} />} />

```

---

## ⚙️ Props Reference

> **Note:** As an extension of `React.ButtonHTMLAttributes`, this component supports all standard HTML button props (like `onClick`, `type`, `disabled`, etc.) in addition to the following:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`variant`** | `VariantOptions` | `'primary'` | Defines semantic style (see variants below). |
| **`size`** | `'sm' | 'md' | 'lg'` | `'md'` | Controls the padding and font size. |
| **`icon`** | `ReactNode` | `undefined` | Optional icon displayed before the text. |
| **`isLoading`** | `boolean` | `false` | Shows a spinner and prevents user interaction. |
| **`isCircle`** | `boolean` | `false` | Makes the button a perfect circle (Icon-only mode). |
| **`className`** | `string` | `""` | Additional Tailwind CSS classes for custom styling. |

### 🎨 Semantic Variants Explained:

* `primary`: Main brand color for key actions (e.g., Save, Submit).
* `secondary`: Subtle style for neutral or secondary actions.
* `danger`: Red theme for destructive actions (e.g., Delete, Terminate).
* `success`: Green theme for positive confirmation or completion.
* `warning`: Amber theme for cautious or reversible actions.
* `outline`: Border-only style for minimalist layouts.
* `text`: Ghost style without background or borders.

---

## 🛠 Customization

### 📐 Global Radius

The button uses a global CSS variable `--app-border-radius` for its corners, ensuring it matches the rest of your UI automatically.

### ⚡ Layout Control

You can easily override the width and layout using Tailwind utility classes:

```tsx
<Button variant="primary" className="w-full mt-4 uppercase tracking-widest">
  Confirm Order
</Button>

```

### 🔒 State Handling

The button component intelligently manages interaction logic:

* **Disabled State:** Automatically reduces opacity and sets `pointer-events-none`.
* **Loading State:** Replaces the text/icon with a spinner while maintaining the button's width to prevent layout shifts.

---
