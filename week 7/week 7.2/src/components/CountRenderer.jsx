import { useContext } from "react"
import { countContext } from "../context"

export default function CountRenderer() {
    const count = useContext(countContext);

    return (
        <>
            <h2>{count}</h2>
            <br />
        </>
    )
}