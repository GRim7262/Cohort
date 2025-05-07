import { useEffect, useRef, useState } from "react"

function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => divRef.current.innerHTML = '10', 5000);
  }, [])

  return (
    <>
      Hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </>
  )
}

export default App
