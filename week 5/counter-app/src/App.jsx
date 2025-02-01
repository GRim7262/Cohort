// State, Components
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Complete React Tutorial",
    description: "Finish the Tic-Tac-Toe game tutorial from the official React Docs."
  }, {
    title: "Review Node.js Concepts",
    description: "Go over Express.js routing and middleware to strengthen understanding."
  }, {
    title: "Buy Groceries",
    description: "Purchase chicken, vegetables, and other essentials for the week."
  }
  ]);

  function addTodo() {
    setTodos([...todos, {
      title: "Random todo",
      description: "Description of random todo"
    }])


    // let newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   title: "Vinal",
    //   description: "vinal pawar"
    // })
    // setTodos(newTodos)
  }

  return (
    <div>
      <button onClick={addTodo}>Add random todo</button>

      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />
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
