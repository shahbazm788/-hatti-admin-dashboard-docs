


# Customization Guide

**Hatti**  comes with a powerful, built-in **Visual UI Customizer**  we called (Hatti Pro Engine) that allows you to change the entire look and feel of your dashboard in real-time without touching a single line of code.

---

## 🎨 Visual Customization (No-Code)

You can access the **UI Customizer** by clicking the **settings**  icon on the dashboard. The changes are applied instantly via CSS Variables and saved to local storage for a persistent experience.

### 1. Theme Mode & Direction
- **Light & Dark Mode:** Toggle between themes seamlessly with optimized contrast for each.

- **RTL Support:** Full support for Right-to-Left languages (like Urdu, Arabic, Persian) with a single toggle.

### 2. Accent Palette (Primary Colors)
Choose from a curated set of professional colors to match your brand identity. This updates:
- Buttons & Links
- Active Sidebar States
- Progress Bars & Icons
- Selection States

### 3. Navigation Flow
Switch between **Side Navigation** (classic enterprise look) and **Top Navigation** (modern eCommerce flow) instantly.

### 4. Advanced Visual Effects
- **Glassmorphism:** Toggle translucent UI elements for a modern, high-end "Apple-style" aesthetic.
- **Border Radius:** Adjust the "curviness" of the UI from sharp (`none`) to pill-shaped (`full`).

### 5. Typography Scale
Adjust the global font size (`xs` to `xl`) to improve readability based on your users' preferences.

---

## 🛠 Technical Customization (For Developers)

If you need to extend the customizer or hard-code your brand's defaults, you can find the logic in the following files:

### Customizing the Sidebar/Nav Position
The layout logic is handled in:
`src/components/layout/DashboardLayout`

### Adding New Accent Colors
To add more colors to the UI Customizer, update the `colorOptions` array in:
`src/components/settings/Settings.tsx`

### Changing Default CSS Variables
Global styles and variables are managed in Tailwind CSS v4. You can modify the core theme in:
`src/index.css`




### Key Features of Hatti Pro:
- **Theme Switching:** Seamless toggle between Light and Dark modes with optimized contrast.

- **RTL Support:** One-click activation for Right-to-Left languages (Urdu, Arabic, etc.).

- **Accent Palette:** Real-time update of the primary brand color across all UI elements.

- **Layout Flow:** Switch between Side Navigation and Top Navigation.

- **Visual Effects:** Toggle **Glassmorphism** for a modern, translucent look.

- **Typography & Radius:** Range sliders to adjust global font sizes and border curvatures instantly.

> **Technical Note:** These settings are powered by React state and synced with CSS Variables, ensuring that all changes are reflected globally and persisted via `localStorage`.

---


## 🛠️  Styling Architecture (Tailwind CSS v4)

Hatti leverages the cutting-edge **Tailwind CSS v4** engine. Unlike older versions, Tailwind 4 uses a **CSS-first configuration**. All global design tokens are managed in:
`src/assets/main.css`

### The CSS Theme Block
Our design system is centralized within the `@theme` block. This allows you to use semantic classes like `bg-main` or `text-primary` that automatically adapt to the current theme.

```css
@theme {
  /* Primary Identity */
  --color-primary-500: var(--primary-500);
  
  /* Semantic Surface Logic */
  --color-bg-main: var(--bg-primary);      /* Screen Background */
  --color-bg-surface: var(--bg-secondary);  /* Card/Module Background */
  --color-border-main: var(--border-light);
  
  /* Dynamic Layout */
  --font-size-custom: var(--app-font-size);
  --radius-custom: var(--app-border-radius);
}

```

---

💜 3. Customizing the Brand Identity
Updating Colors
Hatti uses a professional Purple Scale by default, which is WCAG AA/AAA compliant for maximum accessibility. To change the brand identity, update the hex values in the :root section of main.css:

```css
:root {
  --primary-500: #7c3aed; /* Your Brand Color */
  --primary-600: #6d28d9;
  /* ... */
}

.dark {
  --primary-500: #a78bfa; /* Softer shade for Dark Mode visibility */
}
```


Typography Scale
The global font family is set to 'Inter'. You can change it by updating the font-family in the @layer base block. The font size is dynamic and controlled by the  **--app-font-size**  variable.
---


## ✨ 4. Advanced Utility Classes
We have included custom-built utilities for a high-end commercial feel:

---
| Class | Description |
|---|---|
| .glass-mode | Applies a translucent background with a 12px backdrop blur. |
| .card-hover | A smooth 3D elevation effect that lifts cards on hover. |
| .rounded-custom | Applies the global border-radius defined in the UI Customizer. |
| .bg-grad-blue | Applies the premium brand linear gradient. |

---
## ♿ 5. Accessibility & Contrast

 **Hatti**  is built for everyone. We use specific contrast ratios to ensure readability:
 
 * Text AAA: Slate 900 (#0f172a) on white backgrounds.
 * Focus States: High-visibility rings using focus-visible-ring.
 * Dark Mode: Deep Slate backgrounds (#0f172a) to reduce eye strain while maintaining clarity.
By combining CSS Variables with Tailwind v4, Hatti gives you the power of a full-scale Design System in a lightweight React template.

---

---



### **Common Issues & Solutions**

**Issue:** Colors not updating
**Solution:** Clear browser cache and hard refresh (Ctrl+F5)

**Issue:** Theme switching not working
**Solution:** Check ThemeContext provider wrapping your app

**Issue:** Inconsistent colors
**Solution:** Ensure all color references use theme object

**Issue:** Poor contrast
**Solution:** Use contrast checking tools before deployment

---


## 📞 Getting Help

### Support Channels:
1. **Documentation** – This guide and included docs
2. **Email Support** – shahbazm788@gmail.com



*Theme customization is where your dashboard truly becomes yours. With these tools, you can create a unique look that perfectly matches your brand identity.*






<!-- 
----

# 🎨 Theme Customization Guide

## **Complete Guide to Theme Editing & Customization**

This guide will walk you through every aspect of theme customization, from simple color changes to creating entirely new themes. Since this dashboard uses **Styled Components**, all theme properties are accessible instantly throughout your application via the `theme` object.

---
## **✨ Try Before You Edit (Live Customizer)**
Before you dive into the code, you can experiment with themes and colors in real-time using our Built-in Live Customizer.
-  Launch the App and look for the Settings/Gear Icon on the dashboard.
-  Use the Theme Switcher to toggle between Light, Dark, and System modes.
-  Select from Color Presets or use the Custom Color Picker to see your brand colors applied instantly across all components, charts, and buttons.
-  Once you find your perfect combination, follow the steps below to make those changes permanent in your codebase.
-  💡 Pro Tip: The Live Customizer uses the same theme tokens defined in the files below. It’s the fastest way to "prototype" your brand identity.

## **📁 Theme Structure Overview**

### **Theme Files Location**
```
src/ui/themes/
├── baseTheme.js          # Core theme foundation
├── lightTheme.js         # Light theme configuration
├── darkTheme.js         # Dark theme configuration
└── index.js            # Theme exports
```

### **Theme Hierarchy**
```
baseTheme.js (Foundation)
       ↓
lightTheme.js / darkTheme.js (Extended themes)
       ↓
ThemeContext.js (Applies theme)
       ↓
Your Components (Use theme)
```

---

## **🔧 Step-by-Step Theme Editing**
Note: All changes will be applied instantly across the application

### **Step 1: Changing Primary Colors**

#### **A. Edit Existing Theme Colors**

**Location:** `src/ui/themes/lightTheme.js` (or `darkTheme.js`)

```javascript
// Find the colors object in your theme file
colors: {
  primary: {
    50: '#eff6ff',   // Lightest shade
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3B82F6',  // Primary color (MAIN COLOR)
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',  // Darkest shade
  },

  // Change these to match your brand:
  background: {
    primary: '#ffffff',    // Main background
    secondary: '#f9fafb',  // Secondary background
    tertiary: '#eef2f6',   // Cards, widgets
    hover: '#f8fafc',      // Hover states
  },

  text: {
    primary: '#0f172a',    // Main text color
    secondary: '#334155',  // Secondary text
    tertiary: '#64748b',   // Muted text
    inverse: '#ffffff',    // Text on dark backgrounds
  },
}
```

#### **B. Quick Color Presets**

**For Blue Theme:**
```javascript
primary: {
  500: '#3B82F6',  // Blue
  600: '#2563eb',
}
```

**For Green Theme:**
```javascript
primary: {
  500: '#10B981',  // Emerald
  600: '#059669',
}
```

**For Purple Theme:**
```javascript
primary: {
  500: '#8B5CF6',  // Violet
  600: '#7C3AED',
}
```

**For Red Theme:**
```javascript
primary: {
  500: '#EF4444',  // Red
  600: '#DC2626',
}
```

---

### **Step 2: Changing Fonts & Typography**

**Location:** `src/ui/themes/baseTheme.js`

```javascript
typography: {
  // Change font family
  fontFamily: {
    sans: "'Inter', sans-serif",      // Main font
    mono: "'Fira Code', monospace",   // Code font
  },

  // Adjust font sizes
  fontSize: {
    xs: '12px',    // Extra small
    sm: '14px',    // Small
    base: '16px',  // Base (change this for overall size)
    lg: '18px',    // Large
    xl: '20px',    // Extra large
    '2xl': '24px', // 2x large
  },

  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
}
```

**Popular Font Combinations:**
```javascript
// Modern & Clean
fontFamily: { sans: "'Inter', sans-serif" }

// Professional & Corporate
fontFamily: { sans: "'Montserrat', sans-serif" }

// Friendly & Approachable
fontFamily: { sans: "'Nunito', sans-serif" }

// Tech & Startup
fontFamily: { sans: "'Poppins', sans-serif" }
```

---

### **Step 3: Adjusting Spacing & Layout**

**Location:** `src/ui/themes/baseTheme.js`

```javascript
spacing: {
  // Base unit: 4px
  0: '0',
  1: '4px',    // 4px
  2: '8px',    // 8px
  3: '12px',   // 12px
  4: '16px',   // 16px (change this to adjust overall spacing)
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
},
```

**Common Spacing Adjustments:**
```javascript
// For more compact design
4: '12px',  // Instead of 16px

// For more spacious design  
4: '20px',  // Instead of 16px
```

---

### **Step 4: Customizing Border Radius**

**Location:** `src/ui/themes/baseTheme.js`

```javascript
borderRadius: {
  none: '0',
  sm: '4px',     // Small radius
  md: '8px',     // Medium radius (default)
  lg: '12px',    // Large radius
  xl: '16px',    // Extra large
  '2xl': '24px', // 2x large
  full: '9999px', // Fully rounded
},
```

**Border Radius Styles:**
```javascript
// Sharp corners (modern)
sm: '2px', md: '4px', lg: '6px'

// Rounded corners (friendly)
sm: '6px', md: '12px', lg: '20px'

// Pill shaped (iOS style)
sm: '8px', md: '16px', lg: '24px'
```

### **Step 5: Customizing Shadowss**

**Location:** `src/ui/themes/baseTheme.js`

```javascript
shadows: {
  none: 'none',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
},
```


---

## **✨ Creating New Themes**

### **Step 1: Create a New Theme File**

Create `src/ui/themes/customTheme.js`:

```javascript
import { baseTheme } from './baseTheme';

export const customTheme = {
  ...baseTheme,
  mode: 'custom',
  colors: {
    ...baseTheme.colors,

    // Your custom colors
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',  // Custom primary color
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },

    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      hover: '#e2e8f0',
    },

    text: {
      primary: '#1e293b',
      secondary: '#475569',
      tertiary: '#64748b',
      inverse: '#ffffff',
    },

    // Custom color additions
    accent: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },

  // Optional: Override other properties
  typography: {
    ...baseTheme.typography,
    fontFamily: {
      sans: "'Poppins', sans-serif",  // Different font
    },
  },

  // Add custom properties
  customProperties: {
    headerHeight: '64px',
    sidebarWidth: '280px',
    cardShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },
};

export default customTheme;
```

### **Step 2: Export Your New Theme**

Edit `src/ui/themes/index.js`:

```javascript
import { baseTheme } from './baseTheme';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { customTheme } from './customTheme'; // Add this line

export {
  baseTheme,
  lightTheme,
  darkTheme,
  customTheme, // Add this line
};
```

### **Step 3: Register in ThemeContext**

Edit `src/ui/ThemeContext.js`:

```javascript
// Add import
import { customTheme } from './themes/customTheme';

// Update theme selection logic
const theme = useMemo(() => {
  if (themeMode === "dark") return darkTheme;
  if (themeMode === "light") return lightTheme;
  if (themeMode === "custom") return customTheme; // Add this line
  return baseTheme;
}, [themeMode]);
```

---

## **🎨 Theme Switching System**

### **How Theme Switching Works**

```javascript
// In your component:
import { useTheme } from '../ui/ThemeContext';

const MyComponent = () => {
  const { themeMode, toggleTheme, setThemeMode } = useTheme();

  // Switch to specific theme
  const switchToCustomTheme = () => {
    setThemeMode('custom');
  };

  return (
    <button onClick={switchToCustomTheme}>
      Switch to Custom Theme
    </button>
  );
};
```

### **Theme Toggle Component Example**

Create `src/components/ThemeToggle.jsx`:

```javascript
import React from 'react';
import { useTheme } from '../ui/ThemeContext';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';
import styled from 'styled-components';

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();

  const themes = [
    { id: 'light', name: 'Light', icon: <FiSun /> },
    { id: 'dark', name: 'Dark', icon: <FiMoon /> },
    { id: 'custom', name: 'Custom', icon: <FiSettings /> },
  ];

  return (
    <ThemeSwitcher>
      {themes.map((theme) => (
        <ThemeButton
          key={theme.id}
          active={themeMode === theme.id}
          onClick={() => setThemeMode(theme.id)}
        >
          {theme.icon}
          <span>{theme.name}</span>
        </ThemeButton>
      ))}
    </ThemeSwitcher>
  );
};

const ThemeSwitcher = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  background: ${props => props.theme.colors.background.secondary};
  border-radius: 8px;
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: ${props => props.active
    ? props.theme.colors.primary[500]
    : 'transparent'};
  color: ${props => props.active
    ? '#ffffff'
    : props.theme.colors.text.secondary};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active
      ? props.theme.colors.primary[600]
      : props.theme.colors.background.tertiary};
  }
`;

export default ThemeToggle;
```

---

## **🌈 Color Palette Generator**

### **Create Cohesive Color Palettes**

Add `src/ui/themes/colorUtils.js`:

```javascript
// Utility functions for color manipulation

// Generate shades from base color
export const generateShades = (baseColor) => {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  const adjustBrightness = (color, factor) => {
    const { r, g, b } = hexToRgb(color);
    const adjusted = (value) => Math.min(255, Math.max(0, Math.round(value * factor)));
    return rgbToHex(adjusted(r), adjusted(g), adjusted(b));
  };

  return {
    50: adjustBrightness(baseColor, 1.9),
    100: adjustBrightness(baseColor, 1.7),
    200: adjustBrightness(baseColor, 1.4),
    300: adjustBrightness(baseColor, 1.2),
    400: adjustBrightness(baseColor, 1.1),
    500: baseColor,
    600: adjustBrightness(baseColor, 0.9),
    700: adjustBrightness(baseColor, 0.7),
    800: adjustBrightness(baseColor, 0.5),
    900: adjustBrightness(baseColor, 0.3),
  };
};

// Generate complementary colors
export const generateComplementaryPalette = (primaryColor) => {
  const primary = generateShades(primaryColor);

  // Generate secondary (complementary) color
  const secondaryBase = '#10B981'; // Or calculate from primary
  const secondary = generateShades(secondaryBase);

  // Generate accent colors
  const accent = {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  };

  return { primary, secondary, accent };
};

// Check color contrast for accessibility
export const checkContrast = (foreground, background) => {
  // Implementation for WCAG contrast checking
  return 'AAA'; // AAA, AA, or Fail
};
```

---

## **🔧 Using CSS Variables (Optional)**

### **Add CSS Variables Support**

Edit `src/ui/ThemeContext.js`:

```javascript
// Function to inject CSS variables
const injectCSSVars = (theme) => {
  const root = document.documentElement;

  // Convert theme to CSS variables
  const setColorVariables = (colors, prefix = '') => {
    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'object') {
        setColorVariables(value, `${prefix}${key}-`);
      } else {
        root.style.setProperty(`--${prefix}${key}`, value);
      }
    });
  };

  // Set all color variables
  setColorVariables(theme.colors, 'color-');

  // Set spacing variables
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value);
  });

  // Set typography variables
  root.style.setProperty('--font-family-sans', theme.typography.fontFamily.sans);
  root.style.setProperty('--font-size-base', theme.typography.fontSize.base);
};

// Call in useEffect when theme changes
useEffect(() => {
  injectCSSVars(theme);
}, [theme]);
```

### **Use CSS Variables in Components**

```javascript
const StyledComponent = styled.div`
  /* Using CSS variables */
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-4);
  font-family: var(--font-family-sans);

  /* Fallback values */
  background-color: var(--color-background-primary, #ffffff);

  /* Using theme directly (alternative) */
  background-color: ${props => props.theme.colors.background.primary};
`;
```

---

## **🎯 Theme Presets**

### **Popular Theme Presets**

Create `src/ui/themes/presets.js`:

```javascript
export const themePresets = {
  // Modern Blue
  modernBlue: {
    primary: '#3B82F6',
    background: '#ffffff',
    text: '#1e293b',
  },

  // Dark Professional
  darkProfessional: {
    primary: '#8B5CF6',
    background: '#0f172a',
    text: '#f8fafc',
  },

  // Green Startup
  greenStartup: {
    primary: '#10B981',
    background: '#ffffff',
    text: '#0f172a',
  },

  // Warm Orange
  warmOrange: {
    primary: '#F59E0B',
    background: '#ffffff',
    text: '#1e293b',
  },

  // Purple SaaS
  purpleSaaS: {
    primary: '#8B5CF6',
    background: '#ffffff',
    text: '#1e293b',
  },

  // Minimal Gray
  minimalGray: {
    primary: '#64748b',
    background: '#ffffff',
    text: '#1e293b',
  },
};

// Usage in your app
import { themePresets } from './themes/presets';

const applyPreset = (presetName) => {
  const preset = themePresets[presetName];
  // Apply preset colors to theme
};
```

---

## **🔄 Dynamic Theme Switching**

### **Real-time Theme Editor Component**

Create `src/components/ThemeEditor.jsx`:

```javascript
import React, { useState } from 'react';
import { useTheme } from '../ui/ThemeContext';
import styled from 'styled-components';

const ThemeEditor = () => {
  const { theme, updateTheme } = useTheme();
  const [customColors, setCustomColors] = useState({
    primary: theme.colors.primary[500],
    background: theme.colors.background.primary,
    text: theme.colors.text.primary,
  });

  const handleColorChange = (colorType, value) => {
    setCustomColors(prev => ({
      ...prev,
      [colorType]: value,
    }));

    // Update theme in real-time
    updateTheme({
      colors: {
        ...theme.colors,
        primary: { ...theme.colors.primary, 500: value },
      },
    });
  };

  return (
    <EditorContainer>
      <h3>Theme Editor</h3>

      <ColorPicker>
        <ColorOption>
          <label>Primary Color</label>
          <input
            type="color"
            value={customColors.primary}
            onChange={(e) => handleColorChange('primary', e.target.value)}
          />
          <span>{customColors.primary}</span>
        </ColorOption>

        <ColorOption>
          <label>Background</label>
          <input
            type="color"
            value={customColors.background}
            onChange={(e) => handleColorChange('background', e.target.value)}
          />
          <span>{customColors.background}</span>
        </ColorOption>

        <ColorOption>
          <label>Text Color</label>
          <input
            type="color"
            value={customColors.text}
            onChange={(e) => handleColorChange('text', e.target.value)}
          />
          <span>{customColors.text}</span>
        </ColorOption>
      </ColorPicker>

      <PresetButtons>
        {['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'].map(color => (
          <PresetButton
            key={color}
            color={color}
            onClick={() => handleColorChange('primary', color)}
          />
        ))}
      </PresetButtons>
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.background.secondary};
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ColorPicker = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

const ColorOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: ${props => props.theme.colors.text.secondary};
  }

  input[type="color"] {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  span {
    font-size: 12px;
    font-family: monospace;
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const PresetButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const PresetButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.colors.text.primary};
    transform: scale(1.1);
  }
`;

export default ThemeEditor;
```

---

## **💾 Saving Custom Themes**

### **Save Themes to LocalStorage**

Add to `src/ui/ThemeContext.js`:

```javascript
// Save custom theme
const saveCustomTheme = (themeData) => {
  localStorage.setItem('customTheme', JSON.stringify(themeData));
};

// Load custom theme
const loadCustomTheme = () => {
  const saved = localStorage.getItem('customTheme');
  return saved ? JSON.parse(saved) : null;
};

// Reset to default
const resetTheme = () => {
  localStorage.removeItem('customTheme');
  setThemeMode('light');
};
```

---

## **✅ Theme Customization Checklist**

- [ ] **Primary Colors** – Changed in theme files
- [ ] **Background Colors** – Adjusted for light/dark modes
- [ ] **Text Colors** – Ensure proper contrast
- [ ] **Font Family** – Updated to match brand
- [ ] **Font Sizes** – Adjusted for readability
- [ ] **Spacing** – Consistent throughout
- [ ] **Border Radius** – Matches design system
- [ ] **Shadows** – Appropriate depth levels
- [ ] **Custom Theme** – Created if needed
- [ ] **Theme Switching** – Working properly
- [ ] **CSS Variables** – Set up (optional)
- [ ] **Presets** – Created for quick changes
- [ ] **Save/Load** – Theme persistence working

---

## **🚀 Quick Theme Change Examples**

### **Change Entire Color Scheme in 5 Minutes:**

1. **Open** `src/ui/themes/lightTheme.js`
2. **Find** the `colors` object
3. **Replace** primary color (line with `500: '#3B82F6'`)
4. **Adjust** background colors if needed
5. **Save** and refresh your app

### **Switch to Dark Mode Variant:**

1. **Edit** `src/ui/themes/darkTheme.js`
2. **Follow** same steps as above
3. **Test** both light and dark modes

### **Add Brand Colors:**

```javascript
// Add to your theme file
brand: {
  facebook: '#1877F2',
  twitter: '#1DA1F2',
  linkedin: '#0A66C2',
  instagram: '#E4405F',
  whatsapp: '#25D366',
},
```

---

## **📞 Need Help with Themes?**

### **Common Issues & Solutions**

**Issue:** Colors not updating
**Solution:** Clear browser cache and hard refresh (Ctrl+F5)

**Issue:** Theme switching not working
**Solution:** Check ThemeContext provider wrapping your app

**Issue:** Inconsistent colors
**Solution:** Ensure all color references use theme object

**Issue:** Poor contrast
**Solution:** Use contrast checking tools before deployment

---

## **🎨 Pro Tips**

1. **Start with Base Theme** – Modify `baseTheme.js` for global changes
2. **Use Color Tools** – Adobe Color, Coolors.co for palette generation
3. **Test Accessibility** – Ensure WCAG AA compliance
4. **Keep it Consistent** – Maintain same color usage across components
5. **Document Changes** – Keep notes of customizations for future reference

---
| :--- | ---: |


| ⬅️ [2. Installation Guide](installation.md) | [4. Add New Page](add-new-page.md) ➡️ |

---

*Theme customization is where your dashboard truly becomes yours. With these tools, you can create a unique look that perfectly matches your brand identity.*
 -->