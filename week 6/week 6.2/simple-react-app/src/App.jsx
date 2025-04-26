import { useMemo, useState } from "react"

// function App() {
//   const [count, setCount] = useState(0);
//   const [inputValue, setinputValue] = useState(1);

//   let counter = useMemo(() => {
//     let finalCount = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       finalCount += i;
//     }
//     return finalCount;
//   })

//   return (
//     <>
//       <input onChange={(e) => setinputValue(e.target.value)}
//         placeholder={"Find the sum from 1 to n"} />
//       <div>Sum from 1 to {inputValue} is {counter}</div>
//       <button onClick={() => setCount(count + 1)}>Counter {count}</button>
//     </>
//   )
// }

// export default App

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setinputValue] = useState(1);

  let counter = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);
  return (
    <>
      <input onChange={(e) => {
        setinputValue(e.target.value);
      }} />
      <br /> <br />
      <div>Sum from 1 to {inputValue} is {counter} </div>
      <br /> <br />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  )
}

export default App