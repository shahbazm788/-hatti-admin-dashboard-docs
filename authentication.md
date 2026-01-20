
---

# 🔐 Authentication System

The **Hatti Authentication System** is a unified, enterprise-ready module. Instead of multiple scattered components, it uses a single, robust **AuthLayout** that transforms dynamically based on the user's intent.

---

## 🏗️ Unified Layout Architecture

Hatti follows a **"Single Component, Multiple Modes"** philosophy. This ensures that your brand's aesthetic (Gradients, Glassmorphism, and Animations) remains consistent across all entry points.

### **Core Modes**

| Mode | Primary Purpose | Key Components Involved |
| --- | --- | --- |
| **`login`** | User & Admin access. | Role Switcher, Password Toggle, Remember Me. |
| **`signup`** | New user registration. | Multi-field validation, Personal Details. |
| **`reset`** | Account recovery. | Single-field focus, Secure link request. |

---

## 🔑 1. Login Flow (The Vault Entrance)

The Login mode is optimized for high-speed access. It features a unique **Role-Based Toggle** that allows users to select their access level before authenticating.

### **Features:**

* **Role Switching:** Seamlessly switch between `Administrator` and `Customer`.
* **Remember Me:** Integrated local-storage logic to persist sessions.
* **Form Security:** Built-in protection against double-submission during API calls.

---

## 📝 2. Signup Protocol (Node Registration)

The Signup mode expands the layout to capture essential user data. It utilizes the same high-performance `AuthInput` fields with added validation logic.

* **Dynamic Fields:** Adds `First Name` and `Last Name` fields automatically.
* **Type-Safe Inputs:** Ensures all data matches the `AuthFormData` interface.
* **Success Handlers:** Provides an `onSuccess` callback to redirect users or trigger analytics events.

---

## 🛰️ 3. Account Recovery (Reset Key)

A minimalist, distraction-free view designed to help users regain access to their account with zero friction.

* **Focus UI:** Removes all secondary links (Socials/Role switchers).
* **Security Messaging:** Displays clear success/error messages using `AnimatePresence`.

---

## 🛠️ Developer Implementation Guide

Since all logic is encapsulated in `AuthLayout.tsx`, implementation is incredibly clean. You only need to pass the `mode` prop.

### **Code Snippet:**

```tsx
import AuthLayout from '@/layouts/auth/AuthLayout';

// For Login Page
<AuthLayout mode="login" />

// For Registration Page
<AuthLayout mode="signup" />

// For Forgot Password Page
<AuthLayout mode="reset" />

```

---

## ✨ UX & Performance Highlights

### 🎨 Glassmorphic Aesthetic

The layout uses Tailwind v4's `backdrop-blur` and custom radial gradients (decorative blobs) to create a high-tech, premium feel that stands out from standard admin templates.

### ♿ Accessibility (A11y)

* **W3C Standards:** Every input is linked to a label via `htmlFor` and `id`.
* **Aria Roles:** The entire module is wrapped in a `role="main"` with proper heading hierarchies.

### 🎬 Animations

Powered by **Framer Motion**, the layout features:

* **Staggered Entrance:** Elements appear one by one for a polished look.
* **Shake Effects:** Subtle feedback on validation errors.

---
