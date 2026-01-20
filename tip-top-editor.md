
---

# ✍️ Neural Editor: Enterprise Rich Text System

The **Neural Editor** is a professional-grade WYSIWYG editor built on top of the Tiptap framework. It is designed to handle complex ecommerce content management, such as product descriptions, blog posts, and marketing emails, with high-fidelity formatting.

---

## 🚀 1. Installation & Setup

To integrate this editor, you must install the following dependencies:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-underline @tiptap/extension-text-align @tiptap/extension-image @tiptap/extension-link lucide-react

```

---

## 🛠️ 2. Implementation Guide (How to Use)

Developers can implement this editor in any form or page by following these steps:

### **Basic Integration**

Import the editor and manage its state within a parent component:

```tsx
import React, { useState } from 'react';
import TiptapEditor from './components/TiptapEditor';

const ProductForm = () => {
  const [description, setDescription] = useState('<p>Initial content...</p>');

  const handleSave = () => {
    // Submit the HTML string to your database
    console.log("Submitted HTML:", description);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-xl font-black uppercase mb-4">Product Details</h2>
      
      {/* Implementation */}
      <TiptapEditor 
        value={description} 
        onChange={(html) => setDescription(html)} 
      />

      <button onClick={handleSave} className="mt-6 bg-primary-600 text-white px-8 py-3 rounded-xl uppercase font-black text-[11px]">
        Save to Matrix
      </button>
    </div>
  );
};

```

---

## 📂 3. Technical Features

### **A. Command Toolbar Groups**

The editor features a sticky, group-based toolbar for rapid content creation:

* **Formatting**: Atomic controls for Bold, Italic, and Underline.
* **Structure**: Fast switching between H1, H2, and Bullet Lists.
* **Alignment**: Integrated `TextAlign` extension supporting Left, Center, and Right distribution.
* **Media**: Native browser prompt handling for dynamic Link and Image injection.

### **B. Typography & Design System**

* **Prose Integration**: Uses Tailwind CSS Typography logic but customized for a high-density dashboard look.
* **Auto-Sync**: The `onUpdate` hook ensures the parent state is always in sync with the editor's node tree.
* **Viewport Control**: Features an overflow-y container with a `600px` height limit and a `no-scrollbar` utility.

---

## 📡 4. Data Flow (Prop Lifecycle)

1. **Incoming (`value`)**: Receives a raw HTML string from the parent/database.
2. **Transformation**: Tiptap's engine parses the HTML into a structured JSON Document Object Model.
3. **Outgoing (`onChange`)**: As the user edits, the engine serializes the content back into clean, sanitized HTML and passes it to the `onChange` callback.

---

## 💡 5. Extension Cheat Sheet

| Command | Extension Used | HTML Tag Result |
| --- | --- | --- |
| **Bold** | `StarterKit` | `<strong>` |
| **Link** | `@tiptap/extension-link` | `<a href="..." class="...">` |
| **Alignment** | `@tiptap/extension-text-align` | `<p style="text-align: center">` |
| **History** | `StarterKit` | `Undo / Redo stream` |

---
