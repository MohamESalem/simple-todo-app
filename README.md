# Simple React Todo App

This is a beginner-friendly Todo List application built using React. 

---

### 🔧 **Features**

* **Add Todos** – Use a simple input form to add new tasks.
* **Delete Todos** – Easily remove tasks from the list using a delete button.
* **Mark as Complete** – Click to toggle a task’s completion status; completed tasks are visually struck through.
* **Component-Based Design** – The app is modular and structured using reusable components for better maintainability.

---

### 📚 **What I Learned**

* **JSX** – Writing HTML-like syntax inside JavaScript.
* **Components** – Building UI using reusable pieces like `App`, `TodoList`, `TodoItem`, and `AddTodoForm`.
* **State Management (useState)** – Managing dynamic data within components.
* **Props** – Passing data and event handlers between components.
* **Event Handling** – Managing user interactions (e.g., `onClick`, `onChange`, `onSubmit`).
* **Conditional Rendering** – Dynamically updating the UI (e.g., applying a strikethrough style).
* **Lists and Keys** – Rendering dynamic lists and understanding the `key` prop.
* **Immutability** – Maintaining predictable state by avoiding direct state mutation.

---

### 🚀 **Getting Started**

1. **Clone the repository** (or download the source code).
2. **Navigate to the project folder**:

   ```bash
   cd simple-todo-app
   ```
3. **Install dependencies**:

   ```bash
   npm install
   ```
4. **Start the development server**:

   ```bash
   npm run dev
   ```
5. **Open your browser** and go to: [http://localhost:5173](http://localhost:5173)

---

### 🗂 **Project Structure**

```
src/
├── components/
│   ├── AddTodoForm.jsx   # Input form to add todos
│   ├── TodoItem.jsx      # Individual todo item
│   └── TodoList.jsx      # Container for the list of todos
├── App.css               # Main stylesheet
└── App.jsx               # Main component with core logic and state
```
