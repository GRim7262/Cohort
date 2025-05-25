import './App.css'
import { useAtom } from 'jotai'
import Counter from './components/Counter'
import { counterAtom } from './atoms';
import DoubleCounter from './components/DoubleCounter';
import UserInfo from './components/UserInfo'
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [count] = useAtom(counterAtom);
  return (
    <>
      <h1>{count}</h1>
      <Counter />
      <hr />
      <h2>< DoubleCounter /></h2>

      <UserInfo />

      <ShoppingCart />
    </>
  )
}

export default App
