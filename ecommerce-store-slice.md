Ecommerce Store (BI & Operations)
The useEcommerceStore is the high-performance core of the Architect OS Business Intelligence suite. It merges sales KPIs, logistics tracking, project management (Kanban), and marketing schedules (Calendar) into a single, highly optimized state machine.
1. Executive BI Dashboard
The store tracks critical performance indicators (KPIs) through the stats array. These metrics are designed for instant visual impact using dynamic gradients and trend indicators.
Key Performance Metrics
| Metric | Purpose | Data Type |
|---|---|---|
| Total Revenue | Financial performance tracking. | Currency / Percentage Change |
| Active Orders | Real-time operations volume. | Integer / Trend |
| Logistics Flow | Supply chain efficiency. | Percentage |
| Customer Growth | Marketing and retention success. | Weighted Value |
2. Integrated Kanban System
Unlike traditional stores, Architect OS includes a fully functional Task Management system within the Ecommerce store. This allows managers to link warehouse operations or marketing tasks directly to their sales data.
Logic & Performance
The Kanban state is normalized into tasks and columns. This prevents large re-renders when moving a single item.
 * moveTask: Handles both intra-column reordering and inter-column transfers.
 * addTask: Generates a unique task ID and updates the corresponding column's pointer array.
3. Operations & Analytics
The store provides deep-dive data for inventory management and geographic expansion.
Geographic Sales Tracking
The geographicSales array maps performance across regions, providing a progress value used for visual progress bars and a flag emoji/icon for instant identification.
Revenue & Analytics
The revenueChartData is pre-structured for integration with Recharts or Chart.js, featuring multi-series data (Revenue, Orders, Marketing Spend, and Refunds) to provide a complete 360-degree view of business health.
4. Calendar & Campaign Logic
The calendarEvents within this store are specifically typed for Ecommerce operations.
 * Campaigns: Marketing events (e.g., "Winter Clearance").
 * Stock Events: Logistics-specific dates (e.g., "Warehouse Restock").
 * Deadlines: Critical operation cut-offs.
Store Integration Example
The useEcommerceStore is designed to be the primary data source for your "Overview" or "Admin" pages.
// Accessing complex Kanban logic and Stat metrics
const { stats, kanbanColumns, moveTask } = useEcommerceStore();

// Rendering a KPI Card
{stats.map(stat => (
  <StatCard 
    key={stat.id} 
    title={stat.title} 
    value={stat.value} 
    gradient={stat.gradient} 
  />
))}

Would you like me to create the documentation for the ProductSlice to manage the detailed inventory list, or should we explore the UI components for the Kanban board?
