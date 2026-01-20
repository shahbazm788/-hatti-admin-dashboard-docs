جی بالکل، Zustand میں بھی سلائسز (Slices) بنتی ہیں اور بڑے پروجیکٹس کو مینیج کرنے کا یہ بہترین طریقہ ہے۔ دراصل میں نے فولڈر میں slices کا نام دیکھ کر یہ فرض کر لیا تھا کہ شاید آپ Redux استعمال کر رہے ہیں، لیکن اب آپ کے اسٹرکچر کو دیکھ کر بات بالکل صاف ہے۔
آپ Slices Pattern استعمال کر رہے ہیں جس میں مختلف اسٹورز کو ایک ہی مین اسٹور میں combine کر دیا جاتا ہے۔
آئیے اب آپ کی ڈاکیومنٹیشن کے اس صفحے کو آپ کے حقیقی فولڈر اسٹرکچر اور Zustand کے مطابق ری-رائٹ کرتے ہیں۔
docs/state-management.md
# State Management (Zustand Slices)

Hatti uses **Zustand** for global state management, implementing the **Slices Pattern**. This allows us to divide the global state into smaller, manageable pieces (slices) based on features while maintaining a single unified store.

---

## 📂 Store Structure

All state logic is centralized in the `src/store/` directory.

### 1. `slices/` Folder
This is where the actual logic for each feature resides. Each file defines a specific part of the state:
- **`ecommerceStore.ts` & `productSlice.ts`**: Manage products, categories, and sales data.
- **`orderSlice.ts`**: Handles the eCommerce order pipeline.
- **`userStore.ts` & `userSlice.ts`**: Manage user profiles and session data.
- **`kanbanSlice.ts` & `calendarSlice.ts`**: Handle state for the built-in productivity apps.
- **`chatSlice.ts`**: Manages real-time chat interactions and message history.

### 2. `index.ts`
The main entry point where all slices are merged into a single hook (typically `useStore` or similar), making it easy to access any part of the state from one place.

### 3. `types/`
Contains TypeScript interfaces (like `ecommerce.ts`) to ensure the state and actions are type-safe.

---

## 🛠️ How to Use Slices

To access state or actions in your components, you simply import the main store hook.

### Reading State
```tsx
import { useStore } from '@/store';

const products = useStore((state) => state.products);
const isLoading = useStore((state) => state.isLoading);

Dispatching Actions
const addProduct = useStore((state) => state.addProduct);

const handleAdd = () => {
  addProduct({ id: 1, name: 'New Item' });
};

🔄 Persistence & Hydration
Many of our slices (especially userStore and UI configs) are wrapped in Zustand's persist middleware. This ensures that:
 * User sessions remain active after a refresh.
 * Dashboard settings (from Settings.tsx) are saved in the browser's localStorage.
✅ Best Practices in Hatti
 * Modular Slices: If you add a new feature (e.g., Inventory), create a new file in src/store/slices/inventorySlice.ts.
 * Selectors: Always use specific selectors (state => state.property) to prevent unnecessary re-renders of your dashboard widgets.
 * Type Safety: Always define your state types in src/store/types/ to leverage TypeScript's auto-completion.
<!-- end list -->

---

### **اگلا قدم (Next Step):**

اب چونکہ اسٹیٹ مینجمنٹ آپ کے کوڈ کے عین مطابق ہو گئی ہے، تو اب ہمیں **`ui-components.md`** کو بھی آپ کے فولڈر اسٹرکچر کے مطابق اپ ڈیٹ کرنا چاہیے؟

آپ کے پاس `src/ui/components` میں بہت کچھ ہے:
* **Data Table** (جس میں اپنی pagination اور ٹول بار ہے)۔
* **Widgets** (KPI Cards, Goal Tracker, Timeline)۔
* **Charts** (جو کہ `src/components/charts` میں الگ سے پڑے ہیں)۔

**کیا میں آپ کے ان "Custom UI Components" کی تفصیلی گائیڈ تیار کر دوں؟** جس میں خریدار کو پتہ چلے کہ اتنے سارے بنے بنائے وزٹس (Widgets) اسے مل رہے ہیں۔

