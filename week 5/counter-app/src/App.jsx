import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([{
    title: "Gym @9",
    description: "Pre workout meal",
    completed: false
  }, {
    title: "Coding session",
    description: "Code",
    completed: true
  }, {
    title: "Drink protein shake",
    description: "@9PM",
    completed: false
  }]);

  function onClickHandler(index) {
    const updatedTodos = todos.map((todo, i) => {
      return i === index ? { ...todo, completed: !todo.completed } : todo
    });
    setTodos(updatedTodos);
  }

  return (
    <>
      <button onClick={() => {
        setTodos([...todos, {
          title: "Random todo",
          description: "Description of random todo"
        }])
      }}>Add Random Todo</button>

      {todos.map((todo, index) => {
        return (<Todo
          key={index}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          onClick={() => onClickHandler(index)}
        />
        )
      })}
    </>
  )
}

function Todo({ title, description, onClick, completed }) {
  return (
    <>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <button onClick={onClick}>{completed ? "Completed" : "Mark as Done"}</button>
    </>
  )
}

export default App
