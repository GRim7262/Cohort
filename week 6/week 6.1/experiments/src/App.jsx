import { useEffect } from "react"
import { Card } from "../components/Card"
import { CardWrapper } from "../components/CardWrapper"
import { TextComponent } from "../components/TextComponent"

function App() {
  // return <div>
  //   <CardWrapper>
  //     Hi there
  //   </CardWrapper>
  //   <CardWrapper>
  //     <TextComponent />
  //   </CardWrapper>
  // </div>

  // useEffect(() => alert("Hi", []))

  return <div style={{ display: "flex" }}>
    <Card>
      Hi there
    </Card>

    <Card>
      <div>
        Hello from the 2nd card
      </div>
    </Card>
  </div>
}

// function CardWrapper({ innerComponent }) {
//   return <div style={{ border: "2px solid black" }}>

//     {innerComponent}
//   </div>
// }

// function TextComponent() {
//   return (
//     <p>
//       Hi there
//     </p>
//   )
// }

export default App