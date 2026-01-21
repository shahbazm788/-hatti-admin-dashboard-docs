
---

## 1. User Schema & Identity Logic

The data model is structured to support both front-end access control and detailed profile auditing.

### **Identity & Access Control**

* **Role Management**: Categorizes accounts into `admin`, `manager`, `support`, or `customer` to drive systemic permission logic.
* **Verification Status**: Tracks `emailVerified` and `phoneVerified` flags for security compliance.
* **Presence Monitoring**: Utilizes `lastLogin` timestamps to distinguish between active and dormant user accounts.

### **Engagement Analytics**

Each profile maintains a `stats` object for real-time assessment of user value:

* **Lifetime Value (LTV)**: Aggregated financial contribution (Total Spent).
* **Engagement Frequency**: Total order count.
* **Account Longevity**: Precise tracking of the `joinedDate`.

---

## 2. Administrative Operational Workflow

The slice orchestrates the "Source of Truth" for account management, providing a localized state for the administrative interface.

* **Profile Provisioning**: The `createUser` action hydrates new records with standard defaults, ensuring immediate UI compatibility.
* **Status Governance**: The `updateUserStatus` method facilitates rapid toggling between `active`, `inactive`, and `suspended` states.
* **UI Synchronization**: Managed via `selectedUser` and `showUserModal` states to coordinate detail drawers and editing interfaces.

---

## 3. Data Discovery & Navigation Engine

The system implements an optimized pipeline for searching and paginating through large member directories.

### **Search Functionality**

The `getFilteredUsers` method executes a broad-match scan across multiple data points:

* **Identity**: Matches against concatenated `firstName` and `lastName`.
* **Contact**: Targeted email address lookup for support ticket resolution.
* **Segment Filtering**: Instant filtering by `role` or `status` (e.g., viewing only suspended accounts).

### **Pagination Logic**

The `getUserPaginationInfo` method provides precise metadata for the interface:

* **Contextual Labels**: Generates indices (e.g., "Showing 11 to 20 of 50").
* **Navigation Safety**: Includes `hasNextPage` and `hasPrevPage` flags to manage UI boundary states.

---

## 4. Administrative Metrics (KPIs)

The `getUserStats()` helper aggregates top-level data for the dashboard overview:

| Metric | System Context |
| --- | --- |
| **Total Directory** | Cumulative growth and platform reach. |
| **Active Access** | Real-time platform health and engagement. |
| **Staff Distribution** | Internal oversight of administrative accounts. |
| **Acquisition Velocity** | Volume of new registrations within the current month. |

---

## 5. Technical Implementation

The store provides a direct API for managing directory components and administrative settings.

```tsx
// Member Directory Implementation
import { useUserStore } from '../../store';

const UserDirectory = () => {
  const users = useUserStore(state => state.getPaginatedUsers());
  const { total, active } = useUserStore(state => state.getUserStats());
  const { updateUser } = useUserStore();

  const handleRoleChange = (userId, newRole) => {
    updateUser(userId, { role: newRole });
  };

  return (
    <div className="directory-container">
      <StatSummary total={total} active={active} />
      <UserTable data={users} onRoleChange={handleRoleChange} />
    </div>
  );
};

```

---
