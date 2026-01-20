import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Hatti E-Commerce Dashboard",
  description: "Comprehensive technical documentation for the Hatti UI Framework",
  themeConfig: {
    // 🌐 Navigation Links
    nav: [
      {
        text: "🚀 Dashboard Demo",
        link: "https://stylo-admin-dashboard.vercel.app",
      },
      {
        text: "📖 Live Documentation",
        link: "https://stylo-admin-dashboard-docs-6adg.vercel.app",
      },
    ],

    // 📂 Sidebar Structure
    sidebar: [
      {
        text: "🚀 Getting Started",
        items: [
          { text: "1. Introduction & Overview", link: "/index" },
          { text: "2. Installation Guide", link: "/installation" },
          { text: "3. Theming & Customization", link: "/theming" },
        ],
      },
      {
        text: "🎨 UI Kit Components",
        collapsed: true,
        items: [
          { text: "Introduction to UI", link: "/ui-intro" },
          { text: "Buttons & Badges", link: "/buttons" },
          { text: "Forms & Input Controls", link: "/form-controls" },
          { text: "Feedback & Alerts", link: "/feedback" },
          { text: "Navigation Systems", link: "/navigation" },
          { text: "Loading & Skeletons", link: "/loading" },
          { text: "Dashboard Widgets", link: "/widgets" },
          { text: "Layout Systems", link: "/layouts" },
          { text: "Authentication Layout", link: "/auth-layout" },
          { text: "Data Tables & Display", link: "/data-display" },
          { text: "Glassmorphic Cards", link: "/ui-widgets" },
          { text: "Utility Hooks", link: "/hooks" },
          { text: "Charts & Visualization", link: "/data-viz" },
          { text: "🔐 Identity Management", link: "/authentication" },
          { text: "🚢 Deployment & Production", link: "/deployment" },
        ],
      },
      {
        text: "🛒 Ecommerce Operations",
        collapsed: true,
        items: [
          { text: "Operations Overview", link: "/ecommerce-operations-intro" },
          { text: "Inventory Management", link: "/inventory-management" },
          {
            text: "Order Logistics & Fulfillment",
            link: "/order-logistics-fulfillment",
          },
          { text: "User Directory & Access Control", link: "/user-directory" },
        ],
      },
      {
        text: "📱 Core Applications",
        collapsed: true,
        items: [
          { text: "Applications Overview", link: "/apps-overview" },
          { text: "📅 Event Calendar", link: "/calendar" },
          { text: "💬 Real-Time Chat", link: "/chat-app" },
          { text: "📋 Kanban Board", link: "/kan-ban" },
          { text: "✍️ Tiptap Rich Text Editor", link: "/tip-top-editor" },
        ],
      },
      {
        text: "🛠️ Development & Structure",
        items: [
          { text: "4. Adding Custom Content", link: "/adding-content" },
          { text: "5. Component Customization", link: "/components" },
          { text: "6. Advanced Data Visualization", link: "/data-viz" },
        ],
      },
      {
        text: "⚙️ Advanced State Logic",
        collapsed: true,
        items: [
          {
            text: "7. Zustand Architecture",
            link: "/store-and-slices",
          },
          { text: "🔐 Auth Slice", link: "/auth-slice" },
          { text: "📅 Calendar Slice", link: "/calendar-slice" },
          { text: "💬 Chat Slice", link: "/chat-slice" },
          { text: "📋 Kanban Slice", link: "/kanban-slice" },
          { text: "📦 Orders Slice", link: "/order-slice" },
          { text: "🛍️ Products Slice", link: "/product-slice" },
          { text: "👥 Users & CRM Slice", link: "/users-slice" },
        ],
      },
    ],

    // 👣 Footer & Contact
    footer: {
      message: "Built for developers with ❤️ by Hatti Team.",
      copyright:
        'Copyright © 2025-2026. Need help? <a href="mailto:shahbazm788@gmail.com" style="color: var(--vp-c-brand);">Email Support</a> or <a href="https://wa.me/923408628219" target="_blank" style="color: var(--vp-c-brand);">Live Chat Support</a>',
    },
  },
});