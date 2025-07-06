import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master React', completed: false },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleDeleteTodo = (idToDelete) => {
    const newTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(newTodos);
  };
  
  //I need to restudy this part
  const handleToggleComplete = (idtoToggle) => {
    const newTodos = todos.map(todo => {
      if(todo.id === idtoToggle) {
        return {...todo, completed: !todo.completed};
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list-container">
        <h1>My Todo List</h1>
        <AddTodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleComplete= {handleToggleComplete}
        />
      </div>
    </div>
  );
}

export default App;