import React from "react";

function TodoItem({todo, handleDeleteTodo, handleToggleComplete}) {
    return(
        <li className="todo-item">
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={()=> handleToggleComplete(todo.id)}
            />
            <span className={todo.completed? 'completed' :''}>{todo.text}</span>
            <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-button"
            >Delete</button>

        </li>
    );
}

export default TodoItem;