
---

# ⏳ Loading Components

A collection of visual indicators used to signal that content is being fetched or processed. These components reduce perceived wait times and provide a smooth, fluid user experience during asynchronous operations.

---

## 🌀 1. Loading (Spinner & Dots)

The **Loading** component is a versatile indicator that supports multiple animation styles and semantic variants. It is designed to be used inside buttons, cards, or as full-page overlays.

### **Usage**

```tsx
import Loading from '@/ui/components/loading/Loading';

// 1. Standard Brand Spinner
<Loading type="spinner" variant="primary" size="md" />

// 2. Dots with Vertical Label (Great for initial page loads)
<Loading type="dots" text="Fetching data..." direction="vertical" />

// 3. Pulse effect for subtle background tasks
<Loading type="pulse" variant="success" size="sm" />

```

### **Props (TypeScript)**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`type`** | `'spinner' | 'pulse' | 'dots'` | `'spinner'` | The animation style of the loader. |
| **`size`** | `'sm' | 'md' | 'lg' | 'xl'` | `'md'` | Controls the dimensions (width/height). |
| **`variant`** | `'primary' | 'success' | 'warning' | 'error' | 'white'` | `'primary'` | The semantic color theme based on Tailwind v4. |
| **`text`** | `string` | `undefined` | Optional loading text displayed next to the icon. |
| **`direction`** | `'horizontal' | 'vertical'` | `'horizontal'` | Layout orientation for the icon and text. |

---

## 🦴 2. Skeleton (Content Placeholder)

A specialized placeholder component used to mimic the UI layout while content is loading. It features a hardware-accelerated **shimmer effect** for a high-end commercial feel.

### **Usage**

```tsx
import Skeleton from '@/ui/components/loading/Skeleton';

// 1. Text line skeleton
<Skeleton width="100%" height="16px" />

// 2. Circular avatar skeleton
<Skeleton circle width="50px" height="50px" />

// 3. Complex layout example
<div className="flex gap-4 items-center">
  <Skeleton circle width="48px" height="48px" />
  <div className="flex-1 space-y-2">
    <Skeleton width="120px" height="12px" />
    <Skeleton width="80px" height="10px" />
  </div>
</div>

```

### **Key Props**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`width`** | `string` | `'100%'` | The width (supports any CSS unit like `px`, `rem`, `%`). |
| **`height`** | `string` | `'16px'` | The height of the placeholder bar. |
| **`circle`** | `boolean` | `false` | Applies `rounded-full` for avatars or circular icons. |

---

## 🛠️ Technical Insights

### 🎨 Theme Awareness

Both components are deeply integrated with the **Hatti Design System**:

* **Skeleton:** Automatically adjusts its background and shimmer opacity based on **Dark/Light Mode** using Tailwind's `dark:` classes.
* **Spinner:** Uses Tailwind v4's semantic colors (`primary`, `success`, etc.), ensuring it matches your custom brand identity without extra configuration.

### ⚡ Performance

* **CSS Animations:** We use pure CSS keyframes (`animate-spin`, `animate-pulse`) for the Loading component to avoid unnecessary JS overhead.
* **Shimmer Effect:** The Skeleton uses a linear-gradient background animation that is offloaded to the GPU for smooth 60fps performance even on low-end devices.

### ♿ Accessibility

Loading states are announced to screen readers using `aria-busy="true"` and `role="status"`, ensuring that all users know content is being processed.

---
