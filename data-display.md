
---

# 📊 Data Display Components

**Hatti** provides a robust suite of data display components designed for enterprise-level business intelligence. These components focus on readability, high-density information management, and accessible user experiences.

---

## 🏗️ 1. DataTable & DataGrid

The `DataTable` is the core engine of the dashboard. It abstracts complex logic like sorting, filtering, and pagination into a clean, reusable interface.

### **Dual-View System**

Users can switch instantly between two display modes:

* **Table Mode:** Optimized for high-density data auditing and bulk actions.
* **Grid Mode:** A card-based layout optimized for visual-heavy content.

---

## 🏷️ 2. Badge & Tag System

Badges are used to highlight status, priority, or categories. They feature built-in semantic logic mapping.

### **Semantic Mapping & Logic**

| Status Type | Logic Applied | Visual Feedback |
| --- | --- | --- |
| **Success** | `paid`, `delivered`, `active` | Green / Solid Border |
| **Error** | `cancelled`, `outofstock` | Red / **Pulse Animation** |
| **Warning** | `pending`, `lowstock` | Orange / **Bounce Animation** |

---

## 👤 3. Avatar & User Identity

The Avatar manages user identity with smart fallbacks and real-time presence indicators.

* **Smart Fallback:** Automatically calculates initials (e.g., "John Doe" → "JD") if the image is broken.
* **Presence Tracking:** Integrated status dots for `Online`, `Away`, and `Busy` states.

---

## 🃏 4. Content Cards

Cards are the primary container for grouping related information. They are designed to be modular and highly customizable.

### **Usage**

```tsx
import { Card } from '@/ui/components/card/Card';

<Card title="Order Summary" subtitle="Details for Transaction #882">
  <div className="p-4">
    {/* Card Content Here */}
  </div>
</Card>

```

* **Variants:** Supports `elevated`, `outlined`, and `glass` (glassmorphism) styles and more.
* **Header Actions:** Built-in slot for buttons or dropdowns in the top-right corner.

---

---

## 📈 5. Pro Stats Card (Performance Optimized)

The `StatCardPro` is a high-performance data visualization component. It features hardware-accelerated animations for numeric counting and dynamic sparklines for immediate trend analysis.

### **Usage**

```tsx
import StatCardPro from '@/ui/components/status-card/StatCardGlass';
import { ShoppingCart } from 'lucide-react';

<StatCardPro 
  title="Total Sales"
  value={84200}
  prefix="$"
  change="+14.5%"
  changeType="up"
  icon={ShoppingCart}
  gradient="linear-gradient(135deg, #6366f1, #a855f7)"
/>

```

### **Core Engineering Features**

* **Smooth Counter Animation:** Unlike standard counters, this uses `requestAnimationFrame` with a **Quartic Out Easing** function. This ensures the numbers tick up smoothly and slow down elegantly as they reach the final value.
* **Dynamic SVG Sparklines:** The component generates a custom SVG path based on the `changeType`.
* **Trending Up:** A rising curve is rendered.
* **Trending Down:** A falling curve is rendered.
* **Animated Path:** Uses `pathLength` animations via Framer Motion for a "drawing" effect on load.


* **Memory Management:** Includes a comprehensive cleanup cycle using `cancelAnimationFrame` to prevent memory leaks during high-frequency data updates.

### **Props (TypeScript)**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`value`** | `number | string` | `0` | The numeric value to animate. |
| **`changeType`** | `'up' | 'down' | 'neutral'` | `'neutral'` | Determines the color scheme and sparkline direction. |
| **`duration`** | `number` | `1500` | Animation duration in milliseconds. |
| **`gradient`** | `string` | `Primary` | Custom CSS gradient for the card background. |

---

## 🔬 Technical Insight: Animation Performance

The component is wrapped in `React.memo` to prevent unnecessary re-renders in heavy dashboards. By offloading the numeric counting to the browser's refresh rate (usually 60fps), it keeps the UI thread responsive even when multiple cards are animating simultaneously.

> **RTL Ready:** The component automatically detects the language direction (LTR/RTL) from the `ThemeContext` and mirrors the layout accordingly.

---




## 🛠️ 6. Tooltip (SSR Optimized)

A lightweight, non-blocking component for providing context on hover.

* **SSR Compatibility:** Uses `ReturnType<typeof setTimeout>` for **NodeJS** compatibility.
* **Auto-Positioning:** Supports `top`, `bottom`, `left`, and `right` with intelligent arrow alignment.


---
