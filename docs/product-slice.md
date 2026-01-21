
---

# 🏗️ 1. Product Data Architecture

The data model is designed to support detailed retail analytics and warehouse synchronization.

## **🔄 Semantic Status Management**

The engine implements automated status synchronization based on real-time inventory levels:

* **✅ Active**: Inventory count  and manually enabled.
* **❌ Out of Stock**: Automatically triggered when inventory reaches .
* **📝 Draft**: Staging state for products in preparation; excluded from public view.

## **🆔 Entity Attributes**

* **🏷️ SKU Tracking**: Unique alphanumeric identifiers (e.g., `PRD-XXXX`) for precise record-keeping and warehouse sync.
* **💰 Promotional Logic**: Integrated support for `salePrice` to manage discounts, markdowns, and margin analysis.
* **🖼️ Media Management**: Array-based gallery handling for high-fidelity, multi-angle product visualization.

---

## 📊 2. Inventory Analytics (KPIs)

The slice features a real-time analysis engine, `getStatsForSlider`, that monitors catalog health and financial metrics.

| Metric | Logic & Thresholds |
| --- | --- |
| **⚠️ Low Stock Alert** | Identifies items with quantities between  and . |
| **🚫 Out of Stock** | Flags products requiring urgent procurement (Quantity ). |
| **📈 Price Analysis** | Calculates average catalog price for business intelligence reporting. |
| **📦 Active SKU Count** | Monitors the total volume of unique marketable products. |

---

## ⚙️ 3. Data Processing Pipeline

To maintain high performance across large inventory sets, the slice utilizes a tiered processing strategy for the data grid.

* **🔍 Filtering (`getFilteredProducts`)**: Scans the dataset for matches against `category`, `brand`, and `status`, alongside a global `searchQuery` targeting product names and SKUs.
* **⇅ Sorting (`getSortedProducts`)**: Organizes results by recency, price (Asc/Desc), or stock availability to streamline management workflows.
* **📑 Pagination (`getPaginatedProducts`)**: Slices the processed dataset according to the current view requirements, ensuring optimal UI response times.

---

## 🛠️ 4. Operational Support Helpers

The system provides dynamic utility methods to populate management interfaces without hard-coding values:

* **🌍 Dynamic Discovery**: `getUniqueCategories()` and `getUniqueBrands()` scan the live inventory to return current taxonomies for filter sidebars.
* **📏 Pagination Metadata**: `getProductPaginationInfo()` provides the UI with boundary logic, such as `hasNextPage` and item range strings (e.g., "Showing 1-10 of 55 items").

---

## 💻 5. Technical Implementation

The store provides direct actions for inventory updates that automatically trigger status changes.

```tsx
/**
 * Inventory Management Implementation
 * Demonstrates automated status transitions based on stock delta.
 */
import { useProductStore } from '../../store';

const StockManager = () => {
  const { updateProductStock } = useProductStore();
  
  const handleStockUpdate = (productId, newQuantity) => {
    // Logic: Automatically updates status to 'out_of_stock' if quantity is 0
    updateProductStock(productId, newQuantity);
  };

  return (
    <div className="inventory-controls">
      {/* Product adjustment logic rendered here */}
    </div>
  );
};

```

---
