import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, handleDeleteTodo, handleToggleComplete}) {
    return(
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key = {todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleComplete={handleToggleComplete}
                >
                </TodoItem>
            ))}
        </ul>
    );
}


export default TodoList;