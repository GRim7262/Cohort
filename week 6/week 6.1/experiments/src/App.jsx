import { useState } from "react"
import { Header } from "../components/Header"

function App() {
  const [title, setTitle] = useState("Vinal1");

  function changeTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      <button onClick={changeTitle}>Update the title</button>
      <Header title={title} />
      <Header title={title} />
      <Header title="Vinal3" />
      <Header title="Vinal3" />
      <Header title="Vinal3" />
      <Header title="Vinal3" />
    </div>
  )
}

export default App

// PUSHING THE STATE DOWN

// import { useState } from "react"
// import { Header } from "../components/Header"

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="Vinal3" />
//       <Header title="Vinal3" />
//       <Header title="Vinal3" />
//       <Header title="Vinal3" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("Vinal1");

//   function changeTitle() {
//     setTitle(Math.random());
//   }
//   return (
//     <>
//       <button onClick={changeTitle}>Update the title</button>
//       <Header title={title} />
//     </>
//   )
// }

// export default App