import { CardWrapper } from "../components/CardWrapper"
import { TextComponent } from "../components/TextComponent"

function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent />} />
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