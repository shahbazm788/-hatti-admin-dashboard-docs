
---

# 🗺️ Navigation Components

A set of high-performance components used to organize content and guide users through the application hierarchy. These components are fully RTL-compatible, accessible, and feature smooth, hardware-accelerated animations.

---

## 📍 1. Breadcrumbs

A secondary navigation aid that helps users track their location. The last item is automatically styled as the "Active" state and its link is disabled to prevent redundant clicks.

### **Usage**

```tsx
import Breadcrumbs from '@/ui/components/navigation/Breadcrumbs';
import { User, Home } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'Settings', href: '/settings' },
  { label: 'Profile' } // Active item
];

<Breadcrumbs items={navItems} showHome />

```

### **Props (TypeScript)**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`items`** | `BreadcrumbItem[]` | `Required` | Array of `{ label, href, icon }`. |
| **`showHome`** | `boolean` | `false` | Shows a clickable Home icon at the start. |
| **`separator`** | `ReactNode` | `<ChevronRight />` | Custom element between items. |

---

## 📑 2. Tabs

A content-organizing component that uses **Framer Motion** for liquid-smooth transitions. It supports a "Compound Component" pattern for a cleaner developer experience.

### **Usage**

```tsx
import Tabs from '@/ui/components/navigation/Tabs';
import { User, Shield, CreditCard } from 'lucide-react';

<Tabs  fullWidth  defaultActiveTab={0}>
  <Tabs.Tab label="Account" icon={<User size={14} />}>
    <div className="p-4">Account Settings Content</div>
  </Tabs.Tab>
  
  <Tabs.Tab label="Security" icon={<Shield size={14} />}>
    <div className="p-4">Security Settings Content</div>
  </Tabs.Tab>
  
  <Tabs.Tab label="Billing" disabled icon={<CreditCard size={14} />}>
    <div className="p-4">Billing Content</div>
  </Tabs.Tab>
</Tabs>

```

### **Key Props**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **` fullWidth`** | `boolean` | `false` | Tabs expand to fill the entire container. |
| **`onChange`** | `(index: number) => void` | `undefined` | Callback triggered on tab switch. |

---

## 🪗 3. Accordion

A collapsible section ideal for FAQs or complex settings. It features an optional badge slot for status indicators or counts.

### **Usage**

```tsx
import Accordion from '@/ui/components/navigation/Accordion';
import { Settings, Bell } from 'lucide-react';

<Accordion 
  title="Notification Settings" 
  icon={<Bell size={18} />}
  badge={<span className="bg-success-500/10 text-success-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Live</span>}
  defaultOpen={true}
>
  <div className="p-4 space-y-4">
    <p className="text-sm text-text-sub">Manage your email and push alerts.</p>
    {/* Nest other form components here */}
  </div>
</Accordion>

```

---

## ✨ Advanced Features & UX

### ♿ Accessibility (A11y)

Hatti navigation components are built with accessibility in mind:

* **Tabs:** Implement `role="tablist"`, `aria-selected`, and keyboard navigation.
* **Accordion:** Uses `aria-expanded` and `aria-controls` for screen reader clarity.
* **Breadcrumbs:** Wrapped in a `<nav>` tag with `aria-label="Breadcrumb"`.

### 🎬 Animations

* **Tabs Content:** Uses `AnimatePresence` for a subtle slide-and-fade effect when switching views.
* **Accordion:** Employs CSS `grid-template-rows` transition (0fr to 1fr) for smooth, high-performance expansion without "janky" height calculations.

### 🧩 Type Safety

The `BreadcrumbItem` and `TabProps` are exported interfaces, allowing you to build dynamic navigation arrays with full IDE autocomplete.

---

