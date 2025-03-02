import { useState } from "react";
import { useEffect } from "react"

function App() {
  // https://sum-server-9unv.onrender.com/todos

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetch("https://sum-server-9unv.onrender.com/todos")
    //   .then((res) => res.json())
    //   .then((data) => setTodos(data.todos))

    const fetchTodos = async () => {
      const res = await fetch("https://sum-server-9unv.onrender.com/todos");
      const json = await res.json();
      setTodos(json.todos);
    }
    fetchTodos();
  }, [])

  return (
    <>
      <h1>To-Do App</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            <strong>{todo.title}</strong> - {todo.description} <br />
            <span>Status: {todo.completed ? "✅ Completed" : "❌ Not Completed"}</span>
          </p>
        </div>
      ))}
    </>
  )
}

export default App
