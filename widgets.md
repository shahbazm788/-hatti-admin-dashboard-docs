
---

# 🏗️ Widgets & Monitoring

A collection of specialized components for high-density data visualization, real-time monitoring, and interactive feedback. These widgets are engineered for enterprise applications requiring instant insights at a glance.

---

## 📊 1. KPI Cards (Performance Metrics)

A premium card designed to display Key Performance Indicators. It features an intelligent **Sentiment Analysis** system that displays visual cues (Smile/Frown icons) based on how the current value compares to the set target.

### **Usage**

```tsx
import { KPICard } from '@/ui/components/widgets/KPICard';

const revenueMetric = {
  id: 1,
  name: "Monthly Revenue",
  value: 45000,
  target: 50000, // Automatic sentiment comparison
  trend: 12,     // Percentage growth
  iconName: 'revenue',
  color: '#7c3aed',
  prefix: '$'
};

<KPICard metric={revenueMetric} period="This Month" />

```

### **Key Features**

* **Dynamic Trends:** Automatically colors the trend percentage (Green for growth, Red for decline).
* **Icon Mapping:** Built-in helper to render Lucide icons based on the `iconName` string.

---

## 📡 2. Live Data Indicator

A monitoring widget that tracks data freshness. It provides visual pulsing cues and health status for your infrastructure nodes (API, Database, Cache).

### **Usage**

```tsx
<LiveDataIndicator 
  lastUpdated={new Date().toISOString()} 
  onRefresh={() => handleFetch()}
  autoRefresh={true}
  nodes={{ api: 'healthy', db: 'healthy', cache: 'warning' }}
/>

```

### **Status Levels**

The widget automatically calculates the time difference and switches labels:

* **🟢 Live:** Updated within the last 60 seconds.
* **🟡 Recent:** Updated within 5 minutes.
* **🔴 Stale:** Needs manual refresh.

---

## ⭐ 3. Rating System

A star-based rating system that supports both **Interactive Mode** (for user reviews) and **Read-only Mode** (for displaying averages).

### **Usage**

```tsx
// Interactive Mode
<Rating 
  value={rating} 
  onChange={(val) => setRating(val)} 
  label="Service Quality" 
/>

// Read-only Mode (Compact)
<Rating value={4.2} size={16} readOnly />

```

---

## 📱 4. Stats Slider

A responsive container for multiple stat cards. It acts as a **Touch-friendly Snap-Slider** on mobile and a **Flexible Grid** on desktop.

### **Features**

* **Skeleton Support:** Seamlessly integrates with the Loading group for shimmering placeholders.
* **Snap Scrolling:** Uses CSS `scroll-snap-type` for a smooth mobile experience without heavy JS libraries.

```tsx
<StatsSlider data={metricsArray} gridCols={4} loading={false} />

```

---

## 🕒 5. Timeline View (Audit Logs)

A vertical activity feed used to track system logs, user history, or process steps. It features automated status coloring.

### **Usage**

```tsx
const activityLogs = [
  { id: 1, title: 'Order #120', description: 'Packed & Ready', timestamp: '10:00 AM', status: 'completed' },
  { id: 2, title: 'Payment Delay', description: 'Verification pending', timestamp: '11:30 AM', status: 'urgent' }
];

<TimelineView items={activityLogs} title="Recent Activity" />

```

### **Semantic Mapping**

| Status | Color | Icon |
| --- | --- | --- |
| **Completed** | `text-success-500` | CheckCircle |
| **Urgent** | `text-error-500` | AlertTriangle |
| **Pending** | `text-warning-500` | Clock |
| **Info** | `text-primary-500` | Info |

---

## 🛠️ Customization Tip

All widgets in this group use **Lucide React** for consistency. To extend the icon set in `KPICard`, update the `MetricIcon` utility function in:
`src/utils/iconHelper.ts`

---
