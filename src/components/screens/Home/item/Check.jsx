import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({isComplited}) => {
    return (
        <button className="border-2 rounded-md border-pink-400 w-7 h-7 mr-3" onClick={() => changeTodo(todo._id)}>
            <BsCheck size={24} className="text-gray-900"></BsCheck>
        </button>
    )
}

export default Check