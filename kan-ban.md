
---

# 📋 Operational Fulfillment Hub (Kanban)

The Kanban Board is a high-fidelity operational center designed for real-time task management and order fulfillment. Built with a focus on speed and fluid interactivity, it allows administrators to manage logistics through a drag-and-drop interface.

---

## 🏗️ 1. Technical Stack & Standards

* **Core Engine**: React 19 with strict TypeScript safety.
* **Drag-and-Drop**: Integrated with `@hello-pangea/dnd` for fluid task and column movement.
* **Motion & UX**: Powered by `framer-motion` for smooth modal transitions and drag physics.
* **Styling**: Built with **Tailwind CSS v4**, utilizing a semantic design system.

---

## 📂 2. Functional Architecture

The board is composed of three primary architectural layers:

### **A. Board Orchestrator (`KanbanBoard.tsx`)**

This component synchronizes the global `ecommerceStore` with the UI.

* **Column & Task Mapping**: Dynamically maps task IDs to task objects for efficient lookup.
* **Smart Icons**: Automatically assigns icons (Package, Truck, CheckCircle) based on column titles using the `getColIcon` utility.
* **Search Engine**: Real-time filtration of tasks across all columns without affecting the global state.

### **B. Draggable Core (`TaskCard.tsx`)**

Each card is a discrete unit representing an operation.

* **Priority System**: Visual color coding for `High` (Urgent), `Medium`, and `Low` priorities.
* **Drag Interaction**: Uses a specialized rotation and scaling effect (`rotate-[2deg] scale-105`) during the drag phase to provide tactile feedback.

### **C. Command Center (`TaskEditModal.tsx`)**

A dedicated interface for updating task metadata.

* **Persistence**: Directly pushes updates to the store via the `updateTask` action.
* **Backdrop Blur**: Uses a `60% opacity` blur effect to keep the user focused on the editing task.

---

## 📡 3. Interaction Logic (DND)

The `onDragEnd` callback is the brain of the board's movement logic:

1. **Column Movement**: If `type === "column"`, it reorders the `columnOrder` array in the store.
2. **Task Movement**: If a task is moved, it triggers the `moveTask` action, which handles both **intra-column** (reordering in same list) and **inter-column** (moving between lists) logic.

---

## 📝 4. Developer API & Types

```typescript
export interface KanbanTask {
  id: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
  createdAt?: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  taskIds: string[];
}

```

---

## 💡 5. Performance & UX Features

* **Memoization**: Wrapped in `React.memo` to prevent global layout shifts from triggering full board re-calculations.
* **Empty State Management**: Includes a dotted "Add Activity" trigger at the bottom of every column for quick task creation.
* **Accessibility**: Full support for keyboard-based dragging and focus management.

---

