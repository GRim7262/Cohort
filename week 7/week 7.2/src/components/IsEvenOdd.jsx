import { useAtomValue } from "jotai"
import { isEven } from "./store/atoms/isEven"

export default function IsEvenOdd() {
    const isEvenValue = useAtomValue(isEven)

    return (
        <>
            <h2>It is {isEvenValue ? "Even" : "Odd"}</h2>
        </>
    )
}