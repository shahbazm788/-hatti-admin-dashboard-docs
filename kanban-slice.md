
---

# 📋 Kanban Board & Task Engine

The **KanbanSlice** is the productivity powerhouse of Architect OS. It is engineered to handle complex project workflows using a **Normalized State Pattern**, ensuring that even with hundreds of tasks, drag-and-drop operations remain fluid and performant.

---

## 🏗️ 1. Normalized Data Architecture

To prevent massive re-renders in deep data structures, the Kanban engine decouples tasks from their parent columns.

* **`tasks`**: A flat dictionary (`Record<string, KanbanTask>`). Tasks are accessed directly by ID.
* **`columns`**: Column objects store only an array of `taskIds` (pointers).
* **`columnOrder`**: A simple array of strings that dictates the horizontal sequence of the board (e.g., `['col-1', 'col-2']`).

> **Architect's Note:** This structure allows us to update a task's content without ever touching the column data, and vice versa.

---

## 🔄 2. Drag & Drop Orchestration

The slice provides specialized methods designed to work seamlessly with libraries like `@hello-pangea/dnd`.

### **`moveTask` (Vertical & Cross-Column)**

This is the most critical logic in the engine. It handles:

1. **Reordering**: Moving a task within the same column.
2. **Transferring**: Moving a task from "To Do" to "In Progress."
* It clones the source/destination arrays.
* Removes the Task ID from the source index.
* Splices it into the new destination index.



### **`moveColumn` (Horizontal)**

Handles the global reordering of the board by shifting IDs within the `columnOrder` array, allowing users to rearrange their entire workflow.

---

## 🛠️ 3. Operational Lifecycle

### **Task Management**

* **`addTask`**: Generates a unique system ID and prepends the task to the target column so new work always appears at the top.
* **`updateTask`**: Performs a shallow merge of updates (e.g., status changes) without disrupting the column pointers.
* **`deleteTask`**: A dual-action cleanup—purging the task from the dictionary and filtering it out of the column's pointer array.

### **Column Governance**

* **`deleteColumn` (Cascade Delete)**: A safety operation. When a column is deleted, the engine automatically identifies and purges all associated tasks from the dictionary to prevent "orphaned data" and memory leaks.

---

## 🏷️ 4. Metadata & Priority Matrix

Each task is enriched with metadata to support a high-fidelity visual experience:

| Property | Visual Implementation |
| --- | --- |
| **Priority** | Color-coded badges: `low` (Green), `medium` (Yellow), `high` (Red). |
| **Tags** | Categorical labels for quick filtering (e.g., "API", "Frontend"). |
| **Assignee** | Nested user objects used to render member avatars on cards. |

---

## 💻 5. Implementation Guide (Rendering Logic)

To render the board efficiently, follow the **Top-Down Mapping** pattern:

```tsx
// Optimized Kanban Board Implementation
import { useKanbanStore } from '../../store';

const KanbanBoard = () => {
  const { columnOrder, columns, tasks } = useKanbanStore();

  return (
    <div className="flex gap-6 overflow-x-auto p-4">
      {columnOrder.map(colId => {
        const column = columns[colId];
        // Resolve task pointers to full objects
        const colTasks = column.taskIds.map(id => tasks[id]);
        
        return (
          <KanbanColumn 
            key={colId} 
            title={column.title} 
            tasks={colTasks} 
          />
        );
      })}
    </div>
  );
};

```

---
