import { useAtomValue, useSetAtom } from "jotai"
import { filteredTodoAtom, filterWordAtom } from "../store/todos"

export default function DisplayTodos() {
    const setFilterWord = useSetAtom(filterWordAtom);
    const filteredTodos = useAtomValue(filteredTodoAtom);

    return (
        <>
            <input type="text" placeholder="type to filter todos" onChange={(e) =>
                setFilterWord(e.target.value)
            } />
            {filteredTodos.map((todo) => (
                <div key={todo.id_todo}>
                    {/* <h2>Todo: {todo.id_todo}</h2> */}
                    <h3>Title: {todo.title}</h3>
                    <p>Description: {todo.description}</p>
                </div>
            ))}
        </>
    )
}