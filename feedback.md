
---

# 🔔 Feedback Components

A collection of high-interaction components designed to provide status updates, confirmation dialogs, and real-time notifications. These components ensure your users are always informed about system actions.

---

## 📢 1. Alert

A high-visibility notification used to show system feedback. It automatically maps icons based on the `type` provided.

### **Usage**

```tsx
import Alert from '@/ui/components/feedback/Alert';

<Alert 
  type="success" 
  message="Profile updated successfully!" 
  onClose={() => console.log("Alert Dismissed")} 
/>

```

### **Props (TypeScript Definition)**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`type`** | `'success' | 'error' | 'warning' | 'info'` | `'info'` | Determines the color scheme and icon. |
| **`message`** | `string` | `Required` | The text content to be displayed. |
| **`onClose`** | `() => void` | `undefined` | Enables the 'X' button and handles dismissal. |
| **`className`** | `string` | `""` | Additional Tailwind classes for layout tweaks. |

---

## 🖼️ 2. Modal (Dialog)

A professional overlay for focused user interaction. It features **Body Scroll Locking** and **Focus Trapping** for superior UX.

### **Usage**

```tsx
import Modal from '@/ui/components/feedback/Modal';

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Edit User Profile"
  size="lg"
  footer={<Button onClick={handleSave}>Save Changes</Button>}
>
  <p className="text-text-sub">Please fill in the details below to update your account.</p>
</Modal>

```

### **Key Props**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`isOpen`** | `boolean` | `Required` | Controls the visibility of the dialog. |
| **`size`** | `'sm' | 'md' | 'lg' | 'xl' | 'full'` | `'md'` | Sets the maximum width of the modal. |
| **`preventOverlayClose`** | `boolean` | `false` | Disables closing when clicking the backdrop. |

---

## 🍞 3. Toast System

A global, non-blocking notification system. It uses a **Zustand-powered** store or Context API to stack notifications.

### **Setup & Usage**

First, wrap your application in the provider. Then, trigger toasts from any component:

```tsx
// 1. In your App/Layout
<ToastProvider>
  <DashboardLayout />
</ToastProvider>

// 2. In your component
const { toast } = useToast(); // Custom Hook

toast.success("Product added to cart!");
toast.error("Failed to sync data.");

```

---

## ⚠️ 4. Popconfirm

A compact, specialized confirmation overlay for destructive actions. Ideal for "Delete" or "Reset" operations where a full modal is too heavy.

### **Usage**

```tsx
<Popconfirm 
  title="Delete Order?" 
  description="This action cannot be undone." 
  onConfirm={handleDelete} 
  type="danger"
  confirmText="Yes, Delete"
>
  <Button variant="danger">Delete</Button>
</Popconfirm>

```

---

## 📁 5. Empty State

A clean placeholder displayed when collections (tables, lists, grids) are empty. It follows the **Hatti minimalist aesthetic**.

### **Usage**

```tsx
import { Search } from 'lucide-react';

<EmptyState 
  title="No Results Found" 
  message="Try adjusting your filters to find what you're looking for." 
  icon={<Search size={40} className="text-primary-500" />}
/>

```

### **Type Safety & Customization**

* **Icon Prop:** Accepts any `ReactNode`. You can pass a `LucideIcon`, an image, or even a custom SVG.
* **Layout:** Uses a glassmorphic container for the icon by default (`.bg-bg-surface/60`).
* **Dynamic Content:** The `message` prop supports long strings and handles text wrapping automatically.

---

## 🛠️ Performance & Accessibility

1. **Framer Motion:** Most feedback components use subtle animations (fade-in, scale-up) for a premium feel.
2. **Body Lock:** Modals and Drawers use a helper to prevent the background page from scrolling.
3. **Z-Index Management:** All overlays are layered correctly (Toasts > Modals > Popconfirms) to prevent visual overlapping.

---
