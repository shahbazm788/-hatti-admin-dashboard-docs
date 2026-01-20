# UI Component Library (Custom System)

Hatti doesn't rely on heavy third-party UI frameworks. Every component is custom-built using **React 19** and **Tailwind CSS v4** to ensure maximum performance, deep customization, and a consistent "Hatti Pro" aesthetic.

---

## 🏗️ Design Philosophy
- **Atomic Design:** Components are built as isolated units.
- **Theme-Synced:** Every component automatically responds to the UI Customizer (Border-radius, Colors, Glassmorphism).
- **Accessibility:** Built-in support for WCAG AA contrast and focus states.

---

## 🛠️ Core Components

### 1. Buttons (`src/ui/Button`)
Our custom button system supports various states and styles without the bloat of a library.
- **Variants:** `primary`, `secondary`, `outline`, `ghost`, `danger`.
- **Features:** Auto-loading states, Icon integration, and Ripple effects.
- **Theme Sync:** Uses `--app-border-radius` for consistent corners.

### 2. Form Inputs (`src/ui/Input`)
Premium input fields designed for clean data entry.
- **Types:** Text, Password, Number, Search.
- **Customization:** Integrated validation states (Success/Error) and prefix/suffix icon support.
- **Styling:** Uses `bg-bg-tertiary` for a modern, subtle look.

### 3. Data Tables (`src/ui/Table`)
A highly flexible table system for eCommerce data.
- **Features:** Responsive scrolling, custom row-actions, and status badge integration.
- **Design:** Clean borders (`border-border-main`) and hover-highlighting.

### 4. Cards & Containers (`src/ui/Card`)
The fundamental building block for widgets.
- **`.card-hover` Utility:** Apply this class to any card for a smooth 3D elevation effect.
- **Glassmorphism:** Supports `.glass-mode` for a translucent, high-end feel.

### 5. Modals & Drawers (`src/ui/Modal`)
Custom-built overlay system using **Framer Motion** for smooth animations.
- **Features:** Backdrop blur, ESC-to-close, and mobile-responsive layouts.
- **Z-Index Management:** Optimized for complex dashboard interactions.

---

## 📊 Specialized Components

### 📈 Analytics Widgets (Powered by Recharts)
Custom wrappers for Recharts that match the Hatti color palette automatically.
- **Sales Charts:** Area and Line charts with custom tooltips.
- **Distribution:** Donut and Pie charts for category breakdown.

### 🛠️ The UI Customizer (Hatti Pro Engine)
A specialized component (`DashboardSettings.tsx`) that acts as the control center for:
- Real-time CSS Variable injection.
- Dark/Light mode state management.
- RTL/LTR layout switching.

---

## 💡 How to Use Components

Every component is exported as a functional React component. 

**Example Usage:**
```tsx
import { Button, Card, Badge } from '@/ui';

const Sample = () => (
  <Card className="card-hover">
    <div className="flex justify-between">
      <h3 className="text-text-main">New Order</h3>
      <Badge label="Pending" variant="warning" />
    </div>
    <Button variant="primary">View Details</Button>
  </Card>
);
