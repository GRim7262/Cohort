// import { useState } from "react"
// import TodoList from "./components/TodoList"

// function App() {

//   const [id, setId] = useState(1);

//   return (
//     <>
//       <button onClick={() => setId(id === 5 ? 1 : id + 1)}>Next To-Do</button>
//       <TodoList id={id} />
//     </>
//   )
// }

// export default App

import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [count, setCount] = useState(1);

  function nextCount() {

  }

  return <div>
    <button onClick={nextCount}>1</button>
    <button onClick={nextCount}>2</button>
    <button onClick={nextCount}>3</button>
    <button onClick={nextCount}>4</button>
    <Todo id={1} />
  </div>
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

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
