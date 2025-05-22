import { useContext } from "react"
import { CountContext } from "../context"

export default function CountRenderer() {
    const { count } = useContext(CountContext);

    return (
        <>
            {count}
        </>
    )
}