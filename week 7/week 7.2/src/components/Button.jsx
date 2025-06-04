import { useSetAtom } from "jotai"
import { countAtom } from "./store/atoms/count"

export default function Button() {
    const setCount = useSetAtom(countAtom);
    return (
        <>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </>
    )
}