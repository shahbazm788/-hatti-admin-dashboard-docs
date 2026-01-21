
---

# 💬 Chat & Communication Engine

The **ChatSlice** is the high-performance core that powers real-time messaging within Architect OS. It uses a normalized data structure to handle large volumes of messages while maintaining a fluid, responsive UI for both desktop and mobile viewports.

---

## 🏗️ 1. Data Architecture & Entity Relationships

The system is architected to decouple metadata from content for maximum speed.

* **Conversations (The "Who")**: An array of objects containing participant metadata, unread counts, and the latest message snippet.
* **Messages (The "What")**: A normalized dictionary (`Record<string | number, Message[]>`). By using the `conversationId` as a key, the system can instantly retrieve message history without scanning the entire database.

### **Message Life Cycle**

Every message flows through a four-stage delivery pipeline to ensure transparency:

1. **`sending`**: Dispatched from the UI (Optimistic update).
2. **`sent`**: Acknowledged by the simulated server.
3. **`delivered`**: Reached the recipient's local state.
4. **`read`**: Viewed by the recipient (Triggers visual feedback).

---

## 📂 2. Real-Time Interaction Logic

### **Optimistic Messaging**

When `sendMessage` is executed, the slice immediately pushes the message to the state with a `sending` status. This removes any perceived latency for the user, while the actual data persistence happens in the background.

### **Automated Bot Simulation (`simulateReply`)**

Designed for stress-testing and demo purposes, this engine triggers a random automated response after a calibrated delay (default **2500ms**). It validates:

* Unread message counter increments.
* Notification toast triggers.
* Sidebar conversation re-ordering (bringing the active chat to the top).

---

## 🔍 3. Intelligent Search & Filtering

The ChatSlice implements a dual-layered search engine to navigate high volumes of communication data.

| Feature | Logic | Use Case |
| --- | --- | --- |
| **Filtered Conversations** | Scans `name`, `email`, and `lastMessage` in the sidebar. | Locating a specific contact or thread. |
| **Global Message Search** | Recursive scan across the entire `messages` dictionary. | Finding historical data or past decisions. |

---

## 📱 4. State & UI Synchronization

* **`activeChat`**: Determines the context for the current message thread.
* **`mobileView`**: A layout toggle (`list` | `chat`) that manages the responsive stack on small screens.
* **`messageInput`**: Acts as a **Draft Persistence** engine. If a user types a message and switches to another chat, the input is saved in the store and restored when they return.

---

## 🛠️ 5. Technical Implementation (Usage)

To maintain high performance, use selective store hooks to prevent unnecessary re-renders of the message list.

```tsx
// Optimized Chat View Implementation
import { useChatStore } from '../../store';

const ChatPane = () => {
  const activeChat = useChatStore(state => state.activeChat);
  const messages = useChatStore(state => state.messages[activeChat?.id || ''] || []);
  const sendMessage = useChatStore(state => state.sendMessage);

  const handleSend = (text: string) => {
    if (activeChat) sendMessage(activeChat.id, text);
  };

  return (
    <div className="chat-viewport">
      <MessageList data={messages} />
      <InputArea onSend={handleSend} />
    </div>
  );
};

```

---
