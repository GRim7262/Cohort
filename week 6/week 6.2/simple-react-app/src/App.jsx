import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setinputValue] = useState(1);

  let counter = 0;
  for (let i = 1; i <= inputValue; i++) {
    counter += i;
  }

  return (
    <>
      <input onChange={(e) => setinputValue(e.target.value)}
        placeholder={"Find the sum from 1 to n"} />
      <div>Sum from 1 to {inputValue} is {counter}</div>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </>
  )
}

export default App