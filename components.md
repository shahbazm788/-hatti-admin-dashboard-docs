# 🧩 Component Customization & Creation Guide

## Introduction
Components are the building blocks of your React dashboard. This comprehensive guide covers both customizing existing components and creating new reusable ones that integrate seamlessly with your design system.

## 📁 Component Architecture

### Current Structure
```
src/  
└── ui
│       ├── components
│       │   ├── alert
│       │   │   ├── Alert.jsx
│       │   │   └── Alert.styles.js
│       │   ├── badge
│       │   │   ├── Badge.jsx
│       │   │   └── Badge.styles.js
│       │   ├── buttons
│       │   │   ├── Buttons.jsx
│       │   │   └── Buttons.styles.js
│       │   ├── card
│       │   │   ├── Card.jsx
│       │   │   └── Card.styles.js
│       │   ├── checkbox
│       │   │   ├── Checkbox.jsx
│       │   │   └── Checkbox.styles.js
│       │   ├── index.jsx
│       │   ├── input
│       │   │   ├── Input.jsx
│       │   │   └── Input.styles.js
│       │   ├── modal
│       │   │   ├── Modal.jsx
│       │   │   └── Modal.styles.js
│       │   ├── radio
│       │   │   ├── Radio.jsx
│       │   │   └── Radio.styles.js
```

### Component Types
| Type | Location | Purpose |
|------|----------|---------|
| **UI Components** | `src/ui/components/` | Reusable, presentational components |
| **Page Components** | `src/pages/` | Full page views |
| **Layout Components** | `src/components/layout/` | Layout structure |

## 🛠️ Customizing Existing Components

### Example: Extending Button Component
**File:** `src/ui/components/buttons/Button.styles.js`

```javascript
// Add new variant to existing button
const StyledButton = styled.button`
  /* Existing styles... */

  /* Add new warning variant */
  ${props => props.variant === 'warning' && `
    background: ${props.theme.colors.warning[500]};
    color: white;

    &:hover {
      background: ${props.theme.colors.warning[600]};
    }
  `}

  /* Add new size variant */
  ${props => props.size === 'xl' && `
    padding: 16px 32px;
    font-size: ${props.theme.typography.fontSize.lg};
  `}
`;

// Update component to accept new props
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner size="sm" />
          Loading...
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};
```



## 📋 Data Tables & Styling
Our tables use a **Semantic Styling Pattern**. Each column (e.g., Brand, Price, Status) has its own dedicated Styled Component. This ensures:
- **Pixel-perfect alignment** for different data types.
- **Easy customization:** You can change the typography of the 'Price' column without affecting the 'User Name' column.
- **Clean JSX:** Instead of generic `<td>` tags, you will see descriptive tags like `<Price>` or `<Category>`.

**To modify a table:** Simply navigate to the feature's style file (e.g., `UserTable.styles.js`) and adjust the specific styled component.




## 🏗️ Creating New Components

### Step-by-Step Process

#### 1. Create Component Folder
```bash
mkdir src/ui/components/StatCard
cd src/ui/components/StatCard
touch StatCard.jsx
touch index.js
```

#### 2. Build the Component
**File:** `src/ui/components/StatCard/StatCard.jsx`

```javascript
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

/**
 * StatCard Component - Display statistics with trend indicators
 */
const StatCard = ({
  title,
  value,
  trend,
  percentage,
  icon: Icon,
  color = 'primary',
  loading = false
}) => {
  const isPositive = trend === 'up';

  return (
    <CardContainer>
      <CardHeader>
        <Title>{title}</Title>
        {Icon && <Icon color={color} />}
      </CardHeader>

      <CardBody>
        {loading ? (
          <LoadingText>Loading...</LoadingText>
        ) : (
          <>
            <Value>{value}</Value>
            {percentage && (
              <TrendIndicator isPositive={isPositive}>
                {isPositive ? <FaArrowUp /> : <FaArrowDown />}
                <span>{percentage}%</span>
              </TrendIndicator>
            )}
          </>
        )}
      </CardBody>
    </CardContainer>
  );
};

// PropTypes for validation
StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trend: PropTypes.oneOf(['up', 'down']),
  percentage: PropTypes.number,
  icon: PropTypes.elementType,
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info']),
  loading: PropTypes.bool,
};

// Styled Components
const CardContainer = styled.div`
  background: ${props => props.theme.colors.background.paper};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[5]};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[3]};

  svg {
    font-size: 24px;
    color: ${props => props.color ? props.theme.colors[props.color][500] : props.theme.colors.primary[500]};
  }
`;

const Title = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  margin: 0;
`;

const CardBody = styled.div`
  margin-top: ${props => props.theme.spacing[2]};
`;

const Value = styled.div`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  color: ${props => props.theme.colors.text.primary};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing[2]};
`;

const TrendIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};

  color: ${props => props.isPositive
    ? props.theme.colors.success[500]
    : props.theme.colors.error[500]
  };

  svg {
    font-size: ${props => props.theme.typography.fontSize.xs};
  }
`;

const LoadingText = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  font-style: italic;
`;

export default StatCard;
```

#### 3. Create Export File
**File:** `src/ui/components/StatCard/index.js`
```javascript
export { default } from './StatCard';
```

#### 4. Add to Main Exports
**File:** `src/ui/components/index.js`
```javascript
// Add this line to exports
export { default as StatCard } from './StatCard';
```

#### 5. Use the Component
```javascript
import { StatCard } from '../../ui/components';
import { FaUsers, FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div>
      <StatCard
        title="Total Users"
        value="12,458"
        trend="up"
        percentage={12.5}
        icon={FaUsers}
        color="primary"
      />

      <StatCard
        title="Revenue"
        value="$45,289"
        trend="up"
        percentage={8.2}
        icon={FaDollarSign}
        color="success"
      />
    </div>
  );
};
```

## 🎯 Best Practices

### 1. Component Design
- **Single Responsibility**: Each component should do one thing well
- **Reusable**: Design for multiple use cases
- **Accessible**: Include ARIA attributes and keyboard navigation
- **Responsive**: Work on all screen sizes

### 2. Props Design
```javascript
// Good props structure
const GoodComponent = ({
  // Required props first
  children,
  title,

  // Optional props with defaults
  variant = 'default',
  size = 'medium',
  disabled = false,

  // Event handlers
  onClick,
  onChange,

  // ...rest for HTML attributes
  ...props
}) => {
  // Component logic
};
```

### 3. Styling Guidelines
- Use theme variables for colors, spacing, etc.
- Implement responsive design with theme breakpoints
- Include hover/focus states
- Add transitions for interactive elements

### 4. Performance
- Use `React.memo()` for expensive components
- Implement lazy loading for heavy components
- Avoid inline functions in render

## 📚 Advanced Patterns

### 1. Compound Components
```javascript
// Example: Card with subcomponents
const Card = ({ children }) => <div>{children}</div>;
Card.Header = ({ children }) => <header>{children}</header>;
Card.Body = ({ children }) => <div>{children}</div>;
Card.Footer = ({ children }) => <footer>{children}</footer>;

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### 2. Render Props
```javascript
const DataLoader = ({ children, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [url]);

  return children({ data, loading });
};

// Usage
<DataLoader url="/api/users">
  {({ data, loading }) => (
    loading ? <Spinner /> : <UserList users={data} />
  )}
</DataLoader>
```

### 3. Custom Hooks
```javascript
// Create reusable hook
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

// Use in component
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

## 🔧 Testing Components

### Unit Test Example
```javascript
// StatCard.test.jsx
import { render, screen } from '@testing-library/react';
import StatCard from './StatCard';

describe('StatCard', () => {
  test('renders title and value', () => {
    render(<StatCard title="Users" value="1000" />);
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });
});
```

### Test Checklist
- [ ] Component renders without errors
- [ ] Props work correctly
- [ ] Interactive elements function
- [ ] Responsive behavior
- [ ] Accessibility attributes

## 🚨 Common Issues & Solutions

### Issue: Styles Not Applying
```bash
✅ Check:
1. styled-components import
2. Theme provider wrapper
3. CSS specificity
4. Dynamic props in styled components
```

### Issue: Props Not Passing
```bash
✅ Check:
1. PropTypes definitions
2. Default props
3. Destructuring in component
4. Spread operator usage
```

### Issue: Performance Problems
```bash
✅ Check:
1. Unnecessary re-renders
2. Large bundle size
3. Memory leaks
4. Expensive calculations
```

## 📈 Component Lifecycle

### Development Workflow
1. **Plan**: Define purpose and props
2. **Create**: Build component structure
3. **Style**: Add theme-based styling
4. **Test**: Write unit tests
5. **Document**: Add usage examples
6. **Optimize**: Improve performance
7. **Maintain**: Update as needed

## 🎉 Success Checklist

### For New Components
- [ ] Clear, descriptive name
- [ ] Comprehensive PropTypes
- [ ] Theme-based styling
- [ ] Responsive design
- [ ] Accessibility features
- [ ] Loading/error states
- [ ] Unit tests
- [ ] Documentation
- [ ] Added to exports

### For Customizations
- [ ] Maintains backward compatibility
- [ ] Follows existing patterns
- [ ] Tested with existing usage
- [ ] Updated documentation


## 📞 Getting Help & Support

We are committed to providing you with the best development experience. If you encounter any issues or require further clarification, please use the following support channels:

### Support Channels

1.  **Documentation** – This comprehensive guide and included documentation files.
2.  **Email Support** – For priority assistance regarding bugs or setup issues: parishahbaz007@gmail.com

### Before Contacting Support

To speed up the resolution process, please perform the following checks:

* **Check this documentation** for relevant guides and troubleshooting sections.
* **Verify Node.js version** (must be v18+).
* **Clear browser cache** and perform a hard refresh (Ctrl/Cmd + Shift + R).
* **Check browser console** for any critical errors (red text).
* **Restart development server** (`npm run dev`).

---

## ✅ Installation & Setup Checklist

Confirming these steps ensures your environment is configured correctly:

-   [ ] Node.js installed (v18+)
-   [ ] Project downloaded/extracted
-   [ ] Dependencies installed (`npm install`)
-   [ ] Development server running (`npm run dev`)
-   [ ] Dashboard accessible at `http://localhost:5173`
-   [ ] All core applications working properly
-   [ ] Theme switching functional

---

## 🎉 Congratulations!

Your **Stylo Admin Dashboard** is now successfully installed, configured, and ready for advanced development. You can immediately begin customizing your application:

1.  **Customizing the theme** – Match your brand colors and typography.
2.  **Adding your content** – Replace placeholder data with real-world information.
3.  **Connecting to APIs** – Integrate the application with your custom backend services.
4.  **Building features** – Use the component library to add custom functionality.

---

### ➡️ Quick Navigation & Next Steps

| Guide Section | Description | Status |
| :--- | :--- | :--- |
| [Theme Customization Guide](./theming.md) | How to change colors, fonts, and create new themes. | **Completed** |
| [Component Library Reference](./components.md) | Customizing existing and creating new UI components. | **Current Section** |
| Connecting the dashboard to backend APIs. | **To Do** |
| [Deployment Best Practices](./deployment.md) | Preparing the application for production launch. | **To Do** |

---
| | |
| :--- | ---: |
| ⬅️ [4. Add new page](add-new-page.md) | [6.DataViz](data-viz.md) ➡️ |

*Need further assistance? Contact our dedicated support team at `parishahbaz007@gmail.com`*

---
