import React, { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
    {
        _id: "aweawdasd2",
        title: "Finish 3 projects",
        isComplited: false,
    },
    {
        _id: "aweawdasd2aw",
        title: "Create app",
        isComplited: false,
    },
]

const Home = () => {
const[todos, setTodos] = useState(data)

const changeTodo = (id) => {
    const copy = [...todos] 
    const current = copy.find(t => t._id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
}

    return (
        <div className=" text-white w-4/5 mx-auto ">
            <h1 className="text-2xl font-bold text-center mb-10">ToDo for Junior</h1>
            {todos.map(todo =>( 
            <TodoItem key={todo._id} todo={todo} changeTodo= {changeTodo}></TodoItem>))}
        </div>
    )
}

export default Home