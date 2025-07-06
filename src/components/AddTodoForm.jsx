import React from "react";

function AddTodoForm({inputValue, setInputValue, handleAddTodo}) {
    return(
        <form onSubmit={handleAddTodo}>
            <input 
            type="text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            placeholder="Add a new todo.." />
            <button type="submit">Add</button>
        </form>
    );
}


export default AddTodoForm;