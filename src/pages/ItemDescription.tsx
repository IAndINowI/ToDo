import { useEffect } from "react";
import { ToDo } from "../modules/todo-item";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';

interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todos.find((todo) => String(todo.id) === id)
        if (searchTodo) {
            setTodo(searchTodo)
        } else {
            navigate('/404')
        }
    }, [todos, id, navigate])

    return (
        <div className="container">
            <h1>{todo?.text} </h1>
        </div>
    );
}

// function useState<T>(): [any, any] {
//     throw new Error("Function not implemented.");
// }
