
---

# 🔐 Authentication & Session Engine

The **AuthSlice** is the primary authority for security and identity management within the system. It handles the complete lifecycle of a user session—from the initial login request to maintaining persistence across browser restarts.

---

## 🏗️ 1. Authentication Workflow

The slice follows an asynchronous state machine pattern to manage the transition between guest and authenticated states.

### **The Request Lifecycle**

1. **Trigger**: The `login` or `signup` action is dispatched with credentials.
2. **Pending State**: `loading` is set to `true`, and any previous `error` is purged from the state.
3. **Network Simulation**: An artificial delay (e.g., **800ms**) is introduced to simulate real-world API latency.
4. **Persistence**: On success, the **User Object** and a mock **JWT Token** are committed to `localStorage`.
5. **Settled State**: The global state is re-hydrated: `isAuthenticated` becomes `true`, and `isAuthChecked` is set to ensure the UI renders the correct protected route.

---

## 📊 2. State Definition (Schema)

The `AuthState` is a reactive interface that governs the UI's conditional rendering.

| Property | Type | Description |
| --- | --- | --- |
| **`user`** | `User | null` | The core profile containing `firstName`, `avatar`, and `bio`. |
| **`isAuthenticated`** | `boolean` | Global flag for route guarding (Middleware). |
| **`isAuthChecked`** | `boolean` | Prevents UI "flickering" during the initial storage handshake. |
| **`role`** | `Role` | Defines access levels: `admin`, `manager`, or `customer`. |

---

## ⚙️ 3. Core Logic & Actions

### **A. Session Re-hydration (`checkAuth`)**

This is the **First-Strike** method. It executes during the application's bootstrap phase. It checks `localStorage` for an existing `demo_token`. If valid, it restores the session without requiring a manual login.

### **B. Profile Management (`updateProfile`)**

A specialized action for user-driven changes. It merges `profileData` with the existing user object and simultaneously updates the local cache to prevent data desync between the state and the browser.

### **C. RBAC Utility Helpers**

The slice exports safe helper functions to clean up component logic:

* **`isAdmin()`**: Boolean check for administrative privileges.
* **`getUserRole()`**: Safely retrieves the role string, defaulting to `guest` if unauthenticated.

---

## 🛡️ 4. Security & RBAC Implementation

The system implements a **Mock-JWT** strategy to mirror production environments:

* **Token Management**: Uses a consistent key (`demo_token`) to simulate bearer authentication.
* **Access Control**: The state identifies the user's role immediately upon session initialization, allowing the UI to instantly toggle the **Admin Sidebar** or **Fulfillment Hub**.

---

## 🛠️ 5. Implementation Guide (Usage)

To secure your application, implement the `checkAuth` logic in your entry point:

```tsx
// App.tsx
import { useEffect } from 'react';
import { useAuthStore } from './store';

const App = () => {
  const { checkAuth, isAuthChecked } = useAuthStore();

  useEffect(() => {
    // Attempt to restore session on boot
    checkAuth();
  }, [checkAuth]);

  if (!isAuthChecked) return <LoadingSpinner />;

  return <MainRouter />;
};

```

---

