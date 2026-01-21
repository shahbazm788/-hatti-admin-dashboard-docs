
# 📝 Form Controls

A comprehensive set of input components designed for high-performance data entry. These components feature built-in validation states, RTL support, and seamless integration with the Hatti design system.

---

## ⌨️ 1. Input Field

A robust text field that supports various types, masking, debouncing, and multi-line textareas.

### **Usage**

```tsx
import Input from '@/ui/components/Input';

// 1. Standard Text Input
<Input 
  label="Username" 
  placeholder="Enter your name" 
  required 
/>

// 2. Password with Toggle (Built-in visibility switch)
<Input 
  type="password" 
  label="Password" 
  showPasswordToggle={true} 
/>

// 3. Phone Number with Masking
<Input 
  mask="phone" 
  label="Phone Number" 
  placeholder="(123) 456-7890" 
/>

```

### **Key Props**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string | 'textarea'` | `'text'` | Input type or 'textarea' for multi-line. |
| `mask` | `'phone' | 'currency' | 'date'` | `undefined` | Applies automatic formatting. |
| `error` | `string` | `undefined` | Displays error message and red border. |
| `clearable` | `boolean` | `false` | Shows an 'X' button to clear content. |
| `onDebouncedChange` | `(val: string) => void` | `undefined` | Triggers after a delay (Perfect for Search). |

---

## 🔽 2. Select Dropdown

A theme-aware dropdown menu for selecting single options from a curated list.

### **Usage**

```tsx
const options = [
  { value: 'pk', label: 'Pakistan' },
  { value: 'us', label: 'USA' },
];

<Select 
  label="Country" 
  options={options} 
  placeholder="Select a country" 
  onChange={(e) => console.log(e.target.value)}
/>

```

---

## ✅ 3. Checkbox & Radio

Selection controls for boolean values or picking a single option from a group.

### **Usage**

```tsx
// Checkbox (Boolean)
<Checkbox 
  label="Accept Terms & Conditions" 
  checked={agreed} 
  onChange={(e) => setAgreed(e.target.checked)} 
/>

// Radio (Selection)
<Radio 
  name="gender" 
  label="Male" 
  value="male" 
/>

```

---

## 🔄 4. Toggle & Switch

Visual toggles for binary settings. **ToggleSwitch** includes labels/descriptions, while **Switch** is a compact version for tables.

### **Usage**

```tsx
// 1. ToggleSwitch (With full context)
<ToggleSwitch 
  label="Push Notifications" 
  description="Receive real-time alerts on your device" 
  checked={enabled} 
  onChange={setEnabled} 
/>

// 2. Switch (Compact/Inline)
<Switch 
  size="sm" 
  checked={active} 
  onChange={setActive} 
/>

```

---

## 🛠️ Customization & Validation

### ⚠️ Validation States

You can trigger semantic color changes by passing the `error`, `warning`, or `success` props. This automatically updates the border color and adds relevant icons.

```tsx
<Input 
  label="Email" 
  error="Please enter a valid email address" 
/>

```

### 🎨 Theming

All form controls are tied to the Hatti Global Design System:

* **Border Radius:** Inherits from `--app-border-radius`.
* **Primary Color:** Uses `--primary-500` for focus states and toggles.
* **Dark Mode:** Automatically switches background and border colors using Tailwind's `dark:` utilities.

### 📏 Layout Control

Every component accepts a `containerClassName` prop, allowing you to control width and margins without breaking the internal component structure.

```tsx
<Input label="Search" containerClassName="w-full md:w-1/2" />

```

---
