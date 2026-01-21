
---

# ⚓ Core Utility Hooks

**Hatti** utilizes a set of specialized custom hooks to manage UI states, browser interactions, and responsive logic. These hooks keep your components clean by abstracting complex logic into reusable, type-safe functions.

---

## 🖱️ 1. useDropdown

This hook manages the toggle state for complex header elements like Profile, Notifications, and Language switchers.

### **Key Features:**

* **Click-Outside Detection:** Automatically closes the menu when a user clicks anywhere outside the component.
* **Exclusive Toggling:** Intelligent logic ensures that only one dropdown is active at a time; opening a new menu will automatically close any currently open ones.
* **Ref Integration:** Utilizes React `useRef` to target specific DOM nodes for high-performance interaction tracking.

---

## ↔️ 2. useSidebarToggle

The primary engine for dashboard responsiveness. It dynamically switches sidebar behavior based on the current Viewport Width.

### **Adaptive Layout Logic**

| Screen Size | Device Type | Sidebar Behavior | State Affected |
| --- | --- | --- | --- |
| **> 1080px** | Desktop | Collapses to **Mini-bar** (Icon only) | `isCollapsed` |
| **< 1080px** | Mobile/Tablet | Acts as a **Hidden Drawer** (Overlay) | `isMobileOpen` |

> **Note:** The hook monitors the window object. On desktop, it adjusts the `main` content margin. On mobile, it triggers a full-height entry/exit animation via Framer Motion.

---

## 🍞 3. useToast

A high-level interface for the global notification system. It consumes the `ToastContext` and provides a simplified API for developer feedback.

* **Safety Guard:** Built-in validation to ensure the hook is used within a `ToastProvider`, preventing runtime crashes.
* **Direct API:** Instead of manual state management, use simple methods:
* `toast.success("Message")`
* `toast.error("Message")`
* `toast.info("Message")`



---

## 📏 4. useViewport

A lightweight, performance-optimized hook that listens to browser resize events and returns the real-time window width.

* **Automatic Cleanup:** To prevent memory leaks, the hook removes the `resize` event listener as soon as the component unmounts.
* **JS-Driven Layouts:** Essential for components that need to change their **Logic** (not just CSS) based on screen size, such as dynamic chart resizing or changing data limits in a table.

---

## 📋 Summary Table

| Hook | Primary Responsibility | Core Dependency |
| --- | --- | --- |
| **`useDropdown`** | Popover management & Close-on-click-outside. | `useRef`, `useEffect` |
| **`useSidebarToggle`** | Responsive Layout adaptation logic. | Viewport Width / Global State |
| **`useToast`** | Triggering global feedback alerts. | `ToastProvider` |
| **`useViewport`** | Real-time window dimension tracking. | Window Event Listener |

---
