import { Suspense } from "react"
import Todo from "./components/Todo"

function App() {
  return (
    <>
      {/* <Suspense fallback={"Loading..."}> */}
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
      <Todo id={5} />
      {/* </Suspense> */}
    </>
  )
}

export default App
