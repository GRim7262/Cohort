import { useEffect, useState } from "react";

const TodoList = ({ id }) => {

    const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     fetch('https://sum-server-9unv.onrender.com/todo?id=' + id)
    //         .then((response) => response.json())
    //         .then((data) => setTodo(data.todo));
    // }, [id]);

    useEffect(() => {
        fetch('https://sum-server-9unv.onrender.com/todo?id=' + id)
            .then(async (response) => {
                const result = await response.json();
                setTodos(result.todo);
            })
    }, [id])

    return (
        <>
            <h2>Title: {todos.title}</h2>
            <h3>Description: {todos.description}</h3>
            <h3>Completed: {todos.completed ? '✅ Completed' : '❌ Not Completed'}</h3>

        </>
    )
}

export default TodoList;