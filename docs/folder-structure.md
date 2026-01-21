یہ رہا آپ کا Folder 
# Folder Structure

Hatti follows a **Feature-Driven Architecture**, ensuring that the codebase remains clean, decoupled, and easy to scale. Instead of grouping files by type (like putting all components in one folder), we group them by their business logic (features).

---

## 📂 Root Directory Overview

| Directory | Description |
| :--- | :--- |
| **`src/`** | The main source code of the application. |
| **`docs/`** | Documentation files (the ones you are reading now). |
| **`public/`** | Static assets like the favicon and public manifest. |
| **`dist/`** | Production-ready build output (generated after `npm run build`). |

---

## 🏗️ Inside the `src` Folder

This is where the magic happens. Here is a breakdown of how the code is organized:

### 1. `src/features/` (The Core)
This is the most important folder. Each sub-folder here represents a complete module of the app (e.g., `ecommerce`, `kanban`, `chat`).
- **`components/`**: Feature-specific UI (e.g., `OrderTable` inside `ecommerce`).
- **`services/`**: API calls and data fetching logic for that feature.
- **`pages/`**: The actual view components for that feature.

### 2. `src/ui/` (The Design System)
Contains atomic and reusable UI components that are NOT tied to any specific business logic.
- **`buttons/`**, **`modals/`**, **`inputs/`**, **`cards/`**.
- **`themeProvider/`**: Contains the `ThemeContext` for Dark/Light mode and RTL logic.

### 3. `src/store/` (State Management)
Centralized **Zustand** store slices. Each file manages a specific part of the global state (e.g., `useUserStore.ts`, `useConfigStore.ts`).

### 4. `src/layouts/`
Defines the high-level structure of the pages.
- **`MainLayout.tsx`**: The standard layout with Sidebar and Topbar.
- **`AuthLayout.tsx`**: For Login, Register, and forgot-password pages.

### 5. `src/assets/`
Static resources that are processed by the build tool.
- **`main.css`**: The core Tailwind CSS v4 entry point.
- **`images/`**: Global icons and illustrations.

### 6. `src/routes/`
Centralized routing configuration using **React Router v7**. All paths and their corresponding components are defined here.

---

## 🛠️ Summary Table

```bash
src/
├── assets/             # Global CSS & Images
├── components/         # Global shared components
├── features/           # Independent feature modules (Kanban, Orders, etc.)
├── hooks/              # Reusable React hooks
├── layouts/            # Page shell structures
├── routes/             # Route definitions
├── store/              # Zustand global state
├── ui/                 # Atomic UI Kit (Design System)
└── utils/              # Helper functions & formatters

💡 Key Design Principles
 * Isolation: If you want to delete the "Kanban" feature, you only need to delete the src/features/kanban folder.
 * Reusable UI: Never put business logic inside src/ui. Keep them as "dumb" components.
 * Flat Store: We use Zustand slices to keep the global state flat and high-performing.
Next Step:
Now that you understand the structure, you might want to learn how to Add a New Page or explore our Component Library.

---

