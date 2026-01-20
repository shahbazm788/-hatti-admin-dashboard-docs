
---

# 🏗️ Layout Architecture

The Layout system in **Hatti** provides the structural backbone of the application. It manages the global positioning of navigation elements, provides a responsive "shell" for page content, and handles top-level user interactions.

---

## 🏛️ 1. Dashboard Layout

The `DashboardLayout` is the primary wrapper for all authenticated routes. It utilizes a sophisticated CSS Grid and Flexbox structure to manage the Sidebar, Navbar, and Main Content area dynamically.

### **Key Features**

* **Dynamic Viewport Handling:** Automatically collapses the sidebar on tablets and hides it behind a "hamburger" menu on mobile.
* **Integrated Support:** Includes a floating action button (FAB) that triggers the **Live Chat Sidebar**.
* **Global Settings:** A persistent trigger for the **Theme Customizer** and system configuration panel.
* **RTL/LTR Mirroring:** The entire layout mirrors automatically based on the document direction (perfect for Urdu/Arabic).

---

## 🛰️ 2. Navbar

A high-performance navigation header situated at the top of the viewport. It serves as the command center for the user.

### **Interactive Modules**

* **Global Search (Ctrl + K):** A command-palette style interface that allows users to find pages or data instantly.
* **Notification Center:** A real-time dropdown with **ARIA-live** support for accessible alerts.
* **Theme Switcher:** Seamless toggle between **Light, Dark, and System** modes with no layout shift.

---

## 📋 3. Sidebar

The Sidebar is the primary navigation hub. It is designed to be highly scannable and supports three distinct visual states managed via global state (**Zustand**).

### **Navigation States**

| State | Width | Behavior |
| --- | --- | --- |
| **Expanded** | `280px` | Full labels, sub-headers, and user profile visible. |
| **Mini** | `80px` | Only icons are visible; Tooltips provide context on hover. |
| **Mobile** | `100%` | Hidden by default; Slides in as an overlay from the side. |

> **Profile Integration:** The sidebar features a dynamic profile section that pulls the user's avatar, name, and role directly from the Auth Store.

---

## 🔐 4. Auth Layout

The `AuthLayout` is a dedicated, distraction-free environment for Login, Signup, and Password Recovery flows.

### **UX Design Principles**

* **Glassmorphism:** Uses backdrop blurs (`backdrop-blur-md`) and subtle gradients for a premium aesthetic.
* **Role-Based Login:** Built-in toggle to switch between **Administrator** and **User** login protocols.
* **Secure Forms:** Features password visibility toggles and Framer Motion-based shake animations for error feedback.

---

## 🚀 Implementation Guide

To implement a new page within the dashboard, wrap your route in the `DashboardLayout`. The layout uses the React Router `<Outlet />` to inject your page content:

```tsx
// Example App Router Configuration
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { Overview } from '@/pages/Overview';

const AppRoutes = () => (
  <Routes>
    {/* Protected Dashboard Routes */}
    <Route element={<DashboardLayout />}>
      <Route path="/" element={<Overview />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
    </Route>

    {/* Public Auth Routes */}
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>
  </Routes>
);

```

---

## 🛠️ Performance Tip

The layout uses **CSS Containment** and `will-change` properties on the sidebar to ensure that even with hundreds of menu items, the scrolling and toggling remain at a buttery-smooth **60fps**.

---
