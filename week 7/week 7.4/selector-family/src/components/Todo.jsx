import { useAtomValue } from "jotai"
import { loadableTodoAtomFamily } from "../store/atoms"

export default function Todo({ id }) {
    const todo = useAtomValue(loadableTodoAtomFamily(id));
    const { state, error, data } = todo;

    if (state === "hasError") return <h1>Error occured: {error.message}</h1>
    if (state === "loading") return <h1>Loading...</h1>

    return (
        <>
            {console.log("Fetched todo:", data)}
            <h3>{data.title}</h3>
            <h2>{data.description}</h2>
            <h4>{data.completed ? "Done" : "Not Done"}</h4>
        </>
    )
}