import { useSetAtom } from "jotai"
import { counterAtom } from "../atoms"

export default function Counter() {
    const setCount = useSetAtom(counterAtom)
    return (
        <>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            {' '}
            <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </>
    )
}