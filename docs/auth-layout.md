
---

# 🔐 Advanced Authentication Layout

The `AuthLayout` is a high-security, accessible, and visually stunning authentication module. It adheres to **WCAG 2.1 standards** and features a robust **Role-Based Access Control (RBAC)** entry system.

---

## ✨ Key Technical Features

* **Protocol-Driven UI:** Supports multiple modes: `login`, `signup`, and `reset`.
* **W3C Compliant:** Fully accessible with ARIA roles, labels, and keyboard navigation support.
* **Micro-Interactions:** Powered by `framer-motion` for staggered entrance animations and smooth state transitions.
* **Glassmorphic Aesthetic:** Uses backdrop-blur and high-end decorative blobs for a modern "OS" feel.
* **Role-Based Toggle:** Built-in logic to switch between `Administrator` and `Customer` authentication protocols.

---

## 🛠️ Component API (Props)

The `AuthLayout` is built with strict TypeScript interfaces to ensure type safety across the application.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `'login' | 'signup' | 'reset'` | `'login'` | Defines the view of the authentication module. |
| `onSuccess` | `(user: unknown) => void` | `undefined` | Callback triggered after a successful authentication event. |

---

## 💻 Implementation Example

Integrating the authentication vault into your application is straightforward:

```tsx
import AuthLayout from '@/layouts/auth/AuthLayout';

const LoginPage = () => {
  const handleAuthSuccess = (user) => {
    console.log("Access Granted to Node:", user);
    // Redirect to Dashboard
  };

  return (
    <AuthLayout 
      mode="login" 
      onSuccess={handleAuthSuccess} 
    />
  );
};

```

---

## 🧬 Internal Architecture

### 1. Motion Variants (Animations)

The component uses staggered animations to create a high-end "loading" sequence.

* **Container:** Slides up from `y: 30` with a custom cubic-bezier ease.
* **Children:** Appear with a delay of `0.12s` between each element.

### 2. State Management & Hooks

* **`useStore`:** Connects directly to the Zustand store for `login`, `signup`, and `error` handling.
* **`useCallback`:** Used for `handleInputChange` to prevent unnecessary re-renders of input fields.
* **`AnimatePresence`:** Ensures that error alerts fade out smoothly when cleared.

### 3. Role-Based Switcher

A specialized tab-list that allows users to select their access level.

* **Admin Node:** Sets the context for system-level administrative access.
* **Customer Node:** Switches to standard user authentication protocols.

---

## 🏗️ Sub-Components

To maintain clean code architecture (DRY), the layout utilizes two specialized internal components:

### **AuthInput**

A highly styled input field with:

* **Icon Support:** Integrated Lucide-React icons.
* **Password Toggle:** Built-in visibility switch for password fields.
* **Focus Rings:** High-visibility focus rings for accessibility.

### **RoleButton**

The interactive tabs for role selection, featuring:

* **Active State:** Highlights the selected node using brand gradients.
* **ARIA Roles:** Uses `role="tab"` for screen reader compatibility.

---

## 🔒 Security & UX Best Practices

1. **No-Validate:** Form validation is handled via React state for real-time, custom error feedback instead of default browser bubbles.
2. **Strict Typing:** Uses `keyof AuthFormData` to ensure that input changes only target valid data fields.
3. **Hardware Acceleration:** All animations are `y` and `opacity` based to ensure they run on the GPU at 60fps.
4. **Visual Feedback:** The "Authenticate System" button features a spinning loader state to prevent double-submissions during API calls.

---
