import Count from './component/Count'
import { useState } from 'react'
import { CountContext } from './context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{count, setCount}}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  )
}

export default App
