import { useState } from "react";
import { useEffect } from "react";

function App() {
    return <div>
        <Todo id={1} />
    </div>
}

function Todo({ id }) {
    const [todo, setTodo] = useState({});

    // useEffect(() => {
    //   fetch('https://sum-server-9unv.onrender.com/todo?id=' + id)
    //     .then((response) => response.json())
    //     .then((result) => setTodo(result.todo));
    // }, [])

    //   useEffect(() => {
    //     fetch('https://sum-server-9unv.onrender.com/todo?id=' + id)
    //       .then(async (response) => {
    //         const result = await response.json();
    //         setTodo(result.todo);
    //       })
    //   }, [])

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('https://sum-server-9unv.onrender.com/todo?id=' + id);
            const result = await response.json();
            setTodo(result.todo);
        }
        fetchTodos();
    }, [])

    return <div>
        <h1>
            Title: {todo.title}
        </h1>
        <h4>
            Description: {todo.description}
        </h4>
        <h4>
            Completed: {todo.completed ? 'Yes' : 'No'}
        </h4>
    </div>
}

export default App;
