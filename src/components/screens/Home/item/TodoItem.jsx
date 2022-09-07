import React from "react";
import Check from "./Check";

const TodoItem = ({todo, changeTodo}) => {
    return (
        
        <div className="flex mb-4 rounded-3xl bg-gray-800 p-5">
            <Check></Check>
            {todo.title}
        </div>
    )
}

export default TodoItem