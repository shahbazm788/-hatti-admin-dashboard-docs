

# 🗓️ Advanced Ecommerce Calendar System

The Hatti Calendar is a high-performance **Command Center** designed specifically for managing ecommerce campaigns, flash sales, and logistics. It bridges the gap between raw business data and an intuitive, interactive user interface.

---

## 🏗️ 1. Architecture Overview

The system is architected into four distinct layers to ensure separation of concerns and high performance:

1. **Orchestrator (`CalendarApp.tsx`)**: The root controller managing view transitions, initial data synchronization, and global CRUD delegation.
2. **Adaptive View Engine**:
* **`MonthView.tsx`**: High-density 6-row grid for monthly strategy overviews.
* **`WeekView.tsx`**: A detailed 7-day time-grid for granular scheduling.
* **`DayView.tsx`**: A focused view for daily operations, including location and strategic notes.


3. **Command Center (`EventModal.tsx`)**: The centralized transactional interface for creating, updating, and deleting campaigns.
4. **Strategic Sidebar (`CalendarSidebar.tsx`)**: A persistent utility for real-time filtering and monitoring the upcoming 7-day pipeline.

---

## 🛠️ 2. Component Deep-Dive

### **A. Precise Grid Logic (Month, Week, Day)**

* **Static Grid Height**: `MonthView` always renders 42 cells (6 weeks). This prevents "layout shifting" when navigating between months, providing a stable UI experience.
* **Pixel-Perfect Positioning**: In `WeekView` and `DayView`, event positions are calculated based on time.
* **Scaling Factor**: Events use a factor of `1.066` (64px per hour). This allows the UI to represent 15, 30, and 45-minute intervals with exact visual accuracy.



### **B. Transactional Event Management (`EventModal.tsx`)**

The modal is "Context Aware," meaning it identifies whether it is in **Creation Mode** or **Edit Mode** based on the `isNew` flag.

* **Timezone Synchronization**: Uses a `formatDateTimeLocal` utility to bridge the gap between ISO server strings and local HTML5 datetime-local inputs.
* **Visual Labeling**: Developers can categorize campaigns using a pre-defined 5-color strategic palette, ensuring immediate visual recognition on the dashboard.

---

## 📡 3. Technical Implementation Details

### **State & Data Persistence**

* **Atomic Subscriptions**: By utilizing `useCalendarStore(state => state.filter)`, the app avoids a "re-render storm." Components only update when their specific slice of state changes.
* **CRUD Lifecycle**:
1. `handleDateClick` → Initializes a transient object with default business hours (10 AM - 11 AM).
2. `EventModal` → Captures user input and sanitizes the data.
3. `handleSaveEvent` → Directs the payload to either `addCalendarEvent` or `updateCalendarEvent` in the global Ecommerce Store.



### **UI Engine (Tailwind CSS v4)**

* **Glassmorphism**: Headers and Modals utilize `backdrop-blur-md` combined with `bg-bg-surface/80` for a modern, high-end aesthetic.
* **Performance-First Animations**: Uses `animate-fade-in` for views and `animate-scale-in` for modals to maintain a fluid, app-like feel.

---

## 📝 4. Developer API & Interfaces

| Field | Type | Description |
| --- | --- | --- |
| `type` | `Enum` | Options: `campaign`, `promotion`, `stock`, `event`. |
| `color` | `Hex` | Primary brand color for the event's visual identity. |
| `isNew` | `Boolean` | A transient UI flag used to toggle between POST and PUT operations. |

---

## 💡 5. Optimization Checklist

* **`React.memo`**: All major views are memoized. Changing an event in the `EventModal` will not cause the heavy `MonthView` grid to re-calculate unnecessarily.
* **Adaptive Hours**: The grid is locked from 7 AM to 8 PM to maintain a clean aspect ratio while covering standard business operation hours.
* **Custom Utilities**: Uses `no-scrollbar` and `bg-grid-pattern` to enhance the "Command Center" look without cluttering the UI.

---

