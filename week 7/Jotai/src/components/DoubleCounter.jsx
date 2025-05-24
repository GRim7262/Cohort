import { useAtom } from "jotai"
import { doubledCounterAtom } from '../atoms'

export default function DoubleCounter() {
    const [doubleCounter] = useAtom(doubledCounterAtom)
    return (
        <>
            {doubleCounter}
        </>
    )
}