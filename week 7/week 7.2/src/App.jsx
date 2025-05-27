import { useState } from "react"
import { countContext } from './context'
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <countContext.Provider value={count}>
        <Count setCount={setCount} />
      </countContext.Provider>
    </>
  )
}

export default App
