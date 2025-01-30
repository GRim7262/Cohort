// State, Components
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Go to DSA",
    description: "Study DSA from 9-11",
    completed: true
  }, {
    title: "Go to Sleep",
    description: "Go to sleep from 11-7",
    completed: false
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "Random todo",
      description: "Description of random todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add random todo</button>

      {todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}

export default App
