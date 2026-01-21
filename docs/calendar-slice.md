
---

# 📅 Calendar & Scheduling Engine

The **CalendarSlice** is the primary authority for time-management within Architect OS. It handles complex date-time calculations, multi-view navigation logic, and provides a reactive interface for scheduling enterprise-level tasks.

---

## 🏗️ 1. Core Architecture

The system operates on **"Focused Date"** logic. Instead of overwhelming the browser by loading an entire database of events, the state maintains a specific `currentDate` and `view` mode. This ensures that only relevant data is processed for the active viewport.

### **Navigation Logic**

The navigation engine is context-aware. The `goToNext` and `goToPrevious` actions dynamically adjust their behavior based on the current layout:

* **Month View**: Increments or decrements by exactly **1 month**.
* **Week View**: Shifts the focus by **7 days**.
* **Day View**: Moves the timeline by **1 day**.

---

## 📂 2. Event Data Model & Visual Logic

Each event is structured as a rich metadata object, allowing the UI to handle both logical positioning and aesthetic categorization.

| Property | Implementation Detail |
| --- | --- |
| **`type`** | Categorizes events (Meeting, Deadline, etc.) for systemic filtering. |
| **`color`** | Dynamic CSS variables/Hex codes applied to event cards. |
| **`start / end`** | Boundary markers used for CSS Grid and Timeline positioning. |
| **`reminder`** | Triggers for the background browser notification engine. |

### **Color-Coded Semantic Styling**

To maintain a high-density, scannable dashboard, the slice utilizes a semantic color palette:

* 🔵 **Meeting**: `#3B82F6` (Primary Blue)
* 🔴 **Deadline**: `#EF4444` (Danger Red)
* 🟣 **Task**: `#8B5CF6` (Secondary Purple)
* 🟢 **General**: `#10B981` (Success Green)

---

## 🔍 3. Advanced Filtering Engine

The slice features a high-performance filtering system that optimizes the rendering of the calendar grid through two primary selectors:

### **`getFilteredEvents()`**

Performs a dual-pass reduction:

1. **Category Pass**: Filters events based on the user-selected `EventType`.
2. **Temporal Pass**: Strictly isolates events that belong to the current `month/year` context, preventing the UI from processing off-screen nodes.

### **`getUpcomingEvents()`**

Optimized for **Dashboard Widgets** and **Sidebar Notifications**. This helper:

* Purges past events automatically.
* Sorts the remaining set by chronological proximity.
* Returns the top **N** results for high-speed previewing.

---

## ⚡ 4. Interaction & Modal State

The slice manages the **Event Lifecycle Modal** through a unified state. This reduces component complexity by using a single interface for two distinct operations:

* **Creation Mode**: Triggered when `selectedEvent` is `null`. The modal opens as a blank slate for new data entry.
* **Revision Mode**: Triggered when `selectedEvent` is populated. The form is automatically re-hydrated with existing metadata for editing.

---

## 🛠️ 5. Implementation Example

Developers can easily toggle layouts by dispatching the `setView` action, which triggers smooth transitions in the UI.

```tsx
// Example View Controller
import { useCalendarStore } from '../../store';

const ViewSwitcher = () => {
  const { setView, view } = useCalendarStore();

  return (
    <div className="flex gap-2">
      {['day', 'week', 'month'].map((mode) => (
        <button 
          key={mode}
          onClick={() => setView(mode)}
          className={view === mode ? 'bg-primary-500 text-white' : 'text-text-muted'}
        >
          {mode.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

```

---
