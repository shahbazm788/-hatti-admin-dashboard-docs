
---

# ⚙️ Installation & Setup Guide

## Welcome to Hatti Modern React 19 eCommerce Admin Dashboard 

This guide will help you install and set up your dashboard in minutes. Follow these step-by-step instructions carefully.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Minimum Version | Download Link |
|------|----------------|---------------|
| **Node.js** | 18.x or later | [Download Node.js](https://nodejs.org) |
| **npm** | 8.x or later | (Comes with Node.js) |
| **Git** (optional) | 2.x or later | [Download Git](https://git-scm.com) |
| **Code Editor** | - | VS Code, Sublime, etc. |

### Verify Your Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version (optional)
git --version
```

---

## 📥 Step 1: Download the Project

### A: Download ZIP
1. Download the ZIP file from your purchase
2. Extract the folder to your desired location
3. Open terminal/command prompt in the extracted folder

```bash
# Navigate to project
cd hatti-admin-dashboard
```



---

## 📦 Step 2: Install Dependencies

Open your terminal in the project folder and run:

```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install
```

### What's Being Installed:
```
✅ React 19 – Frontend framework
✅ TypeScript 
✅ Vite 7+ – Build tool & dev server
✅ Tailwind 4+ - styling
✅ Zustand – State management
✅ Recharts – Data visualization
✅ React Router – Navigation
✅ Lucide react – Icon library
✅ And more
```

**Installation Time:** 1-2 minutes depending on your internet speed.


---- 
## ▶️ Step 3: Start Development Server

After installation completes, start the development server:

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

### Expected Output:
```
VITE v7.x.x ready in 500ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
➜  press h to show help
```

### Open Your Browser:
1. Go to: `http://localhost:5173`
2. You should see your dashboard running
3. If port 5173 is busy, Vite will automatically use another port

---


---

## 🏗️ Step 4: Build for Production

When you're ready to deploy:

```bash
# Create production build
npm run build

# OR using yarn
yarn build
```

### Build Output:
- Creates a `dist/` folder
- Contains optimized, minified files
- Ready for deployment

### Preview Production Build:
```bash
# Preview the production build locally
npm run preview

# OR using yarn
yarn preview
```

---



##  📂 Project Structure
Hatti follows a modular and clean folder structure to keep the codebase maintainable:

 * src/ui: Contains atomic UI components like Buttons, Inputs, and Modals.

 * src/features: Houses independent modules such as Orders, Kanban, Chat, and Analytics.

 * src/store: Zustand store slices for managing global application state.

 * src/assets: Global CSS (Tailwind 4), images, and fonts.

 * src/layouts: Defines different page structures (e.g., Sidebar and Topbar 
 layouts).

---

## ❓ Troubleshooting Common Issues

### Issue 1: `npm install` Fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: Port Already in Use
```bash
# Kill process on port 5173
# On Mac/Linux:
lsof -ti:5173 | xargs kill

# On Windows:
netstat -ano | findstr :5173
# Then taskkill /PID [PID] /F

# OR use different port
npm run dev -- --port 3000
```

### Issue 3: Blank White Screen
1. Check browser console (F12) for errors
2. Ensure all dependencies are installed
3. Verify React Router configuration

### Issue 4: Slow Performance
1. Check Node.js version (should be 18+)
2. Close other applications using memory
3. Consider upgrading your system RAM

---

## 🎯 Quick Start Commands Reference

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm install` | Install dependencies | First setup |
| `npm run dev` | Start development server | Daily development |
| `npm run build` | Create production build | Before deployment |
| `npm run preview` | Preview production build | Testing before deploy |
| `npm run lint` | Check code quality | Code review |
| `npm run lint:fix` | Fix code style issues | Before committing |

---

---

## 📞 Getting Help

### Support Channels:
1. **Documentation** – This guide and included docs
2. **Email Support** – shahbazm788@gmail.com

### Before Contacting Support:
- Check this documentation
- Verify Node.js version
- Clear browser cache
- Check console for errors
- Restart development server

---

## ✅ Installation Checklist

- [ ] Node.js installed (v18+)
- [ ] Type Script
- [ ] Project downloaded/extracted
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Dashboard accessible at localhost:5173
- [ ] All applications working properly
- [ ] Theme switching functional

---

## 🎉 Congratulations!

Now that you're set up, you can start customizing the dashboard:
 * Theming: Update src/index.css to change primary colors and branding.
 * Data: Connect your backend APIs by replacing the mock data in the **src/store** directory.
Happy Coding with Hatti!

---


*Need further assistance? Contact our support team at shahbazm788@gmail.com*






<!-- 
---

# ⚙️ Installation & Setup Guide

## Welcome to Stylo Admin Dashboard

This guide will help you install and set up your dashboard in minutes. Follow these step-by-step instructions carefully.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Minimum Version | Download Link |
|------|----------------|---------------|
| **Node.js** | 18.x or later | [Download Node.js](https://nodejs.org) |
| **npm** | 8.x or later | (Comes with Node.js) |
| **Git** | 2.x or later | [Download Git](https://git-scm.com) |
| **Code Editor** | - | VS Code, Sublime, etc. |

### Verify Your Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version (optional)
git --version
```

---

## 📥 Step 1: Download the Project

### Option A: Download ZIP (Recommended for Beginners)
1. Download the ZIP file from your purchase
2. Extract the folder to your desired location
3. Open terminal/command prompt in the extracted folder

```bash
# Navigate to project
cd stylo-admin-dashboard
```

---

## 📦 Step 2: Install Dependencies

Open your terminal in the project folder and run:

```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install
```

### What's Being Installed:
```
✅ React 18+ – Frontend framework
✅ Vite 7+ – Build tool & dev server
✅ Styled Components v6+ – CSS-in-JS styling
✅ Zustand – State management
✅ Recharts – Data visualization
✅ React Router – Navigation
✅ React Icons – Icon library
✅ And 20+ other packages
```

**Installation Time:** 1-2 minutes depending on your internet speed.

---

## ▶️ Step 3: Start Development Server

After installation completes, start the development server:

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

### Expected Output:
```
VITE v7.x.x ready in 500ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
➜  press h to show help
```

### Open Your Browser:
1. Go to: `http://localhost:5173`
2. You should see your dashboard running
3. If port 5173 is busy, Vite will automatically use another port

---

## 🏗️ Step 4: Build for Production

When you're ready to deploy:

```bash
# Create production build
npm run build

# OR using yarn
yarn build
```

### Build Output:
- Creates a `dist/` folder
- Contains optimized, minified files
- Ready for deployment

### Preview Production Build:
```bash
# Preview the production build locally
npm run preview

# OR using yarn
yarn preview
```

---

## 🚀 Step 5: Deploy to Production

### Recommended Platforms:

#### **Vercel (Easiest)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### **Netlify**
1. Drag and drop your `dist/` folder to Netlify
2. Or connect your Git repository

#### **GitHub Pages**
```bash
# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

#### **Other Options:**
- AWS S3 + CloudFront
- Firebase Hosting
- DigitalOcean App Platform
- Heroku
- Any static hosting service

---

## 📁 Project Structure Overview

```
stylo-admin-dashboard/
├── 📂 public/              # Static assets
├── 📂 src/                 # Source code
│   ├── 📂 assets/          # Images, fonts, icons
│   ├── 📂 components/      # React components
│   │   ├── 📂 chat_app/    # Chat application
│   │   ├── 📂 email/       # Email application
│   │   ├── 📂 calendar_app/# Calendar application
│   │   ├── 📂 todo_app/    # Todo application
│   │   ├── 📂 products/    # Product management
│   │   ├── 📂 orders/      # Order management
│   │   ├── 📂 pages/           # Route pages
│   │   ├── 📂 users/       # User management
│   │   └── 📂 layout/      # Layout components
│   ├── 📂 ui/              # UI components library
│   │   ├── 📂 themes/      # Theme configurations
│   │   ├── 📂 components/  # Reusable UI components
│   │   └── 📂 themeProvider# Theme context
│   ├── 📂 store/           # State management
│   └── 📂 hooks/           # Custom React hooks
├── 📄 package.json         # Dependencies & scripts
├── 📄 vite.config.js       # Build configuration
└── 📄 README.md            # Documentation
```

---

## 🔧 Basic Customization

### Change Theme Colors:
```javascript
// Edit: src/ui/themes/lightTheme.js
colors: {
  primary: {
    500: '#3B82F6', // Change this color
  },
  // ... other colors
}
```

### Modify Layout:
- Edit files in `src/components/layout/`
- Adjust sidebar, header, footer components

### Add New Page:
1. Create new file in `src/pages/`
2. Add route in router configuration
3. Update navigation menu

---

## ❓ Troubleshooting Common Issues

### Issue 1: `npm install` Fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: Port Already in Use
```bash
# Kill process on port 5173
# On Mac/Linux:
lsof -ti:5173 | xargs kill

# On Windows:
netstat -ano | findstr :5173
# Then taskkill /PID [PID] /F

# OR use different port
npm run dev -- --port 3000
```

### Issue 3: Blank White Screen
1. Check browser console (F12) for errors
2. Ensure all dependencies are installed
3. Verify React Router configuration

### Issue 4: Slow Performance
1. Check Node.js version (should be 18+)
2. Close other applications using memory
3. Consider upgrading your system RAM

---

## 🎯 Quick Start Commands Reference

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm install` | Install dependencies | First setup |
| `npm run dev` | Start development server | Daily development |
| `npm run build` | Create production build | Before deployment |
| `npm run preview` | Preview production build | Testing before deploy |
| `npm run lint` | Check code quality | Code review |
| `npm run lint:fix` | Fix code style issues | Before committing |

---

## 🔍 Advanced Configuration

### Environment Variables:
Create `.env` file in project root:
```env
VITE_APP_NAME="Stylo Admin dashbiard"
VITE_API_URL="https://api.yourdomain.com"
VITE_ENABLE_ANALYTICS=true
```

### Vite Configuration:
Edit `vite.config.js` for:
- Custom ports
- Proxy settings
- Build optimization
- Plugin configuration

### Adding TypeScript:
```bash
# Install TypeScript
npm install -D typescript @types/react @types/react-dom

# Initialize
npx tsc --init
```

---

## 📞 Getting Help

### Support Channels:
1. **Documentation** – This guide and included docs
2. **Email Support** – parishahbaz007@gmail.com

### Before Contacting Support:
- Check this documentation
- Verify Node.js version
- Clear browser cache
- Check console for errors
- Restart development server

---

## ✅ Installation Checklist

- [ ] Node.js installed (v18+)
- [ ] Project downloaded/extracted
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Dashboard accessible at localhost:5173
- [ ] All applications working properly
- [ ] Theme switching functional

---

## 🎉 Congratulations!

Your Stylo Admin dashboard is now successfully installed and ready for development. You can start:

1. **Customizing the theme** – Match your brand colors
2. **Adding your content** – Replace placeholder data
3. **Connecting to APIs** – Integrate with your backend
4. **Building features** – Add custom functionality

---

**Next Steps:**
- [Theme Customization Guide](./theming.md)
- [Component Library Reference](./components.md)
- [Deployment Best Practices](./deployment.md)

---

*Need further assistance? Contact our support team at parishahbaz007@gmail.com*

---
 -->