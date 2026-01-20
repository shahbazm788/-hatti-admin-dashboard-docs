
# Adding New Content

This guide explains how to extend **Hatti** by creating new UI atoms and full-screen pages while maintaining the project's architectural integrity.

---

## 🏗️ 1. Adding a New Atom Component

Atoms are the smallest building blocks (e.g., a custom Badge, a unique Button, or a Loader). These should always be placed in `src/ui/`.

### Steps to add an Atom:
1. **Create the folder:** Inside `src/ui/`, create a new folder for your component (e.g., `Badge`).
2. **Create the file:** Add `Badge.tsx`.
3. **Use Tailwind v4 for Styling:** Use the theme variables we defined in `main.css`.

**Example (`src/ui/Badge/Badge.tsx`):**
```tsx
import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success';
}

const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary' }) => {
  return (
    <span className={`px-2 py-1 rounded-custom text-xs font-bold 
      ${variant === 'primary' ? 'bg-primary-500 text-white' : 'bg-success-500 text-white'}`}>
      {label}
    </span>
  );
};

export default Badge;
```

## 📄 2. Adding a New Page
Adding a page involves two main steps: creating the page component in a feature folder and registering it in the router.
### Step A: Create the Page Component
Always place your page within a relevant feature folder in src/features/. If it's a new category, create a new folder.

## Example
```tsx
/*(src/features/support/pages/TicketList.tsx):*/
import React from 'react';

const TicketList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-black text-text-main">Support Tickets</h1>
      <p className="text-text-sub">Manage your customer queries here.</p>
    </div>
  );
};

export default TicketList;

```

### Step B: Register the Route
Hatti uses React Router v7. To make your page accessible, add it to src/routes/index.tsx.
 * Import your page.
 * Add it to the children array of the MainLayout.
<!-- end list -->

```tsx
import TicketList from '../features/support/pages/TicketList';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'tickets', element: <TicketList /> }, // New Route
      // ... existing routes
    ],
  },
];

```


## 🔗 3. Adding to Sidebar (Navigation)
To make your new page visible in the sidebar, update the navigation configuration in src/constants/navigation.ts:

```tsx
export const sidebarLinks = [
  {
    title: 'Support',
    icon: <LifeBuoy size={20} />,
    path: '/tickets',
  },
];
```
✅ Best Practices
 * Consistency: Always use the .rounded-custom class for border-radius to ensure it syncs with the UI Customizer.
 * Color Usage: Use semantic Tailwind classes like text-text-main or bg-bg-surface instead of hardcoded hex codes.
 * Logic Placement: Keep UI components "pure" (props only). Any business logic or API calls should stay within the features/ directory.
Next Step:
Now that you can add pages, check out our State Management Guide to learn how to handle global data across your new components.

---

