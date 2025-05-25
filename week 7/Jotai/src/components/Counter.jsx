import { useAtom } from "jotai"
import { counterAtom } from "../atoms"

export default function Counter() {
    const [, setCount] = useAtom(counterAtom)
    return (
        <>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            {' '}
            <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </>
    )
}