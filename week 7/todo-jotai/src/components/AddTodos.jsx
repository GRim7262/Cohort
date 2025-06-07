import { useAtom, useAtomValue } from "jotai";
import { originalTodosAtom, todoAtom } from "../store/todos";

let id_to = 0;

export default function AddTodos() {
    const todo = useAtomValue(todoAtom);
    const [originalTodos, setOriginalTodos] = useAtom(originalTodosAtom);

    const addTodo = () => {
        if (originalTodos.some((t) => t.id_to === todo.id_todo)) {
            alert("Todo already exists");
        } else {
            setOriginalTodos([...originalTodos, todo]);
            id_to++;
        }
    }

    return (
        <>
            {/* <h3>Todo id: {todo.id_todo}</h3>
            <h3>Todo Title: {todo.title}</h3>
            <h4>Todo Description: {todo.description}</h4> */}
            <br /> <br />
            <button onClick={addTodo}>Add Todo</button>
            <br /> <br />
        </>
    )
}