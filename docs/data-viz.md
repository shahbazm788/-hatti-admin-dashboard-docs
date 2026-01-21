
---

# 📊 Data Visualization (Charts)

A suite of high-performance data visualization components built on top of **Recharts**. These charts are meticulously designed to be responsive, theme-aware, and feature-rich—including gradients, custom tooltips, and GPU-accelerated animations.

---

## 📈 1. Modern Area Chart

Ideal for showing trends over time with a visual emphasis on the volume. It features a smooth monotone curve and a brand-aligned linear gradient fill.

### **Usage**

```tsx
import ModernAreaChart from '@/ui/components/charts/ModernAreaChart';

const data = [
  { quarter: "Q1", revenue: 24000 },
  { quarter: "Q2", revenue: 18000 },
  { quarter: "Q3", revenue: 32000 },
];

<ModernAreaChart title="Quarterly Growth" data={data} />

```

---

## 📊 2. Bar Chart (Comparison)

Used for comparing different categories. This version includes progressive loading animations where bars "grow" from the baseline upon visibility.

### **Usage**

```tsx
import ModernBarChart from '@/ui/components/charts/ModernBarChart';

<ModernBarChart 
  title="Monthly Revenue" 
  data={monthlyData} 
  showGrid={true}
/>

```

---

## 🍩 3. Pie & Donut Chart

Visualizes parts of a whole. It includes a custom legend system that adaptively switches from a side-list (Desktop) to a toggleable dropdown (Mobile).

### **Usage**

```tsx
import ModernPieChart from '@/ui/components/charts/ModernPieChart';

<ModernPieChart 
  title="Market Share" 
  data={[
    { name: "Direct", value: 400 }, 
    { name: "Referral", value: 300 }
  ]} 
  isDonut={true} // Switches to Donut style
/>

```

---

## 📉 4. Multi-Line Chart (Series Analysis)

A dynamic, multi-series chart that can render any number of lines based on a configuration object. It features **Collision-Safe Tooltips** that never overlap.

### **Usage**

```tsx
const config = [
  { key: "sales", label: "Sales", color: "var(--color-primary-500)" },
  { key: "profit", label: "Profit", color: "var(--color-success-500)" }
];

<MultiLineChart title="Sales vs Profit" dataSet={myData} config={config} />

```

---

## 🌌 5. Scatter Analysis Chart

Perfect for identifying correlations between two numerical variables. It uses color-coded "dots" to represent performance ranges and identify outliers instantly.

---

## 🛠️ Technical Integration & Optimization

### 🎨 Theme Intelligence

The charts are deeply integrated with the **Hatti Design System**. They automatically consume CSS variables, ensuring a seamless transition between Light and Dark modes without a page refresh:

* **Grid Lines:** `var(--border-main)`
* **Axis Text:** `var(--text-muted)`
* **Tooltips:** `var(--bg-surface)` with backdrop-blur.

### 📱 Responsive Strategy

Every chart is wrapped in a `ResponsiveContainer`. To ensure the best layout:

1. Place charts inside a **Grid** or **Card** component.
2. The chart will automatically scale its width to `100%` of the parent.
3. On mobile, the X-axis labels are automatically thinned out to prevent clutter.

### 📑 Component Configuration Summary

| Chart Type | Key Feature | Best For |
| --- | --- | --- |
| **Area** | Linear Gradient Fill | Cumulative totals & volume tracking. |
| **Bar** | Counter Animation | Comparison of discrete monthly/yearly items. |
| **Pie** | Inner Radius (Donut) | Proportional distributions and market share. |
| **Line** | Multi-key Support | Comparing multiple trends (e.g., Target vs Actual). |
| **Scatter** | Color Logic | Identifying patterns and performance clusters. |

---

