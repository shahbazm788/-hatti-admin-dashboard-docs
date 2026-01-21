
---

# 🚀 Integrated Applications Overview

**Hatti** is not just a dashboard; it’s a full-featured ecosystem of specialized applications. Each app is designed to solve a specific business problem, ranging from real-time communication to project management and data handling.

## 🛠️ The Core Ecosystem

Our architecture separates these features into self-contained "App Modules." Each module has its own logic, state handling, and UI components.

### 1. 📅 Calendar App

A high-performance scheduling tool that supports multiple views (Day, Week, Month). It handles event persistence and real-time scheduling updates.

* **Key Files:** `CalendarApp.tsx`, `MonthView.tsx`, `EventModal.tsx`.
* **Data Source:** `CalendarSlice` (Zustand) & Syncs with local/API event arrays.

### 2. 💬 Chat App

A real-time messaging interface with sidebar navigation for contacts and a dynamic message window. Optimized for low-latency communication.

* **Key Files:** `ChatApp.tsx`, `ChatSidebar.tsx`.
* **Data Source:** `ChatSlice` (Zustand) & WebSocket/Firebase integration ready.

### 3. 📋 Kanban Board

A drag-and-drop project management tool. It allows users to track tasks through different stages of a workflow.

* **Key Files:** `KanbanFeature.tsx`.
* **Data Source:** `KanbanSlice` (Zustand) with persist middleware for state retention.

### 4. 🛍️ Product & Order Management

The commercial heart of the dashboard. This module handles CRUD operations for inventory and tracks sales transactions.

* **Key Files:** `ProductTable.tsx`, `OrderDetails.tsx`, `ProductForm.tsx`.
* **Data Source:** `ProductSlice` & `OrderSlice` (Zustand) fetching from REST API endpoints.

### 5. 👥 User Management

An administrative module to manage permissions, user profiles, and roles within the system.

* **Key Files:** `UserList.tsx`, `UserForm.tsx`, `UserTable.tsx`.
* **Data Source:** `AuthSlice` & `UserStore`.

### 6. ✍️ TipTap Editor

A professional-grade Rich Text Editor integrated for content creation, blogs, or internal notes.

* **Key Files:** `TipTapEditor.tsx`.
* **Data Source:** Local state for real-time editing, exports data as JSON or HTML.

---

## 📡 Data Flow Strategy

All these apps follow a **Unified Data Pattern**:

1. **Initial Load:** Apps fetch data from their respective API endpoints upon mounting.
2. **State Sync:** The data is pushed into specialized **Zustand Slices**.
3. **UI Update:** Components subscribe to these slices (using selective selectors) to reflect changes instantly.

---

