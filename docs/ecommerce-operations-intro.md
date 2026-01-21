
---

# 📦 Ecommerce Operations Suite

The **Ecommerce Operations** module is the core engine of the Hatti Dashboard. It provides a comprehensive set of tools for managing the lifecycle of a sale—from inventory creation and user management to final order fulfillment.

---

## 🏗️ 1. Module Overview

This suite is organized into three specialized sub-modules, each handling a critical pillar of the online store:

### **A. Product Ecosystem (`/products`)**

* **Purpose**: Catalog and Inventory Management.
* **Key Components**:
* `ProductForm`: Integrated with the **Neural Editor** for rich descriptions.
* `ProductStats`: Real-time stock alerts and sales performance metrics.
* `ProductTable`: High-density grid for rapid inventory adjustments.



### **B. Order Logistics (`/orders`)**

* **Purpose**: Fulfillment and Transactional Integrity.
* **Key Components**:
* `OrderList`: The primary workflow for processing new customer requests.
* `OrderDetails`: A granular view of SKUs, shipping logs, and payment status.
* `OrderTable`: Batch-processing interface for shipping labels and status updates.



### **C. User & CRM (`/users`)**

* **Purpose**: Customer Relationship & Staff Access Control.
* **Key Components**:
* `UserList`: Comprehensive directory of customers and internal staff.
* `UserStats`: Analytics on user acquisition and lifetime value (LTV).
* `UserForm`: Role-based access control (RBAC) and profile security management.



---

## 🛠️ 2. Implementation Guide (How to Use)

To implement the **Ecommerce Operations** suite into your main layout, follow this routing and state integration structure:

### **Routing Example**

```tsx
import { Routes, Route } from 'react-router-dom';
import ProductList from './products/ProductList';
import OrderList from './orders/OrderList';
import UserList from './users/UserList';

const OperationsHub = () => {
  return (
    <div className="ops-container">
      <Routes>
        {/* Inventory Management */}
        <Route path="inventory" element={<ProductList />} />
        
        {/* Fulfillment Pipeline */}
        <Route path="orders" element={<OrderList />} />
        
        {/* Customer Directory */}
        <Route path="customers" element={<UserList />} />
      </Routes>
    </div>
  );
};

```

---

## 📡 3. Global Data Sync

The entire suite is connected to the `useEcommerceStore`. This ensures that:

1. **Inventory Updates**: Changing a stock level in `ProductForm` reflects immediately in the `OrderDetails` inventory check.
2. **Order Links**: Clicking a customer name in the `OrderTable` navigates the admin directly to the relevant profile in `UserDetails`.
3. **Real-Time Metrics**: `ProductStats` and `UserStats` update dynamically as orders move from **Pending** to **Completed**.

---

## 💡 4. Design Standards

| Feature | Standard |
| --- | --- |
| **Tables** | Uses `bg-bg-surface` with sticky headers for large data sets. |
| **Forms** | Multi-column layouts with `Neural Editor` for long-form content. |
| **Status Badges** | Semantic colors: `Success` (Shipped), `Warning` (Pending), `Error` (Cancelled). |
| **Modals** | Uses `framer-motion` for side-panel detail views. |

---
