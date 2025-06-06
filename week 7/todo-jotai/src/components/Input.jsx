import { useAtom } from "jotai";
import { todoAtom } from "../store/todos";

let id_to = 0;
let timeout1, timeout2;

export default function Input() {
    const [todo, setTodo] = useAtom(todoAtom);

    return (
        <>
            <input type="text" placeholder="title" onChange={(e) => {
                clearTimeout(timeout1);
                timeout1 = setTimeout(() => {
                    setTodo({ ...todo, title: e.target.value, id_todo: id_to })
                }, 1000);
            }} />
            <br />
            <input type="text" placeholder="description" onChange={(e) => {
                clearTimeout(timeout2);
                timeout2(setTimeout(() => {
                    setTodo({ ...todo, description: e.target.value, id_todo: id_to })
                }, 1000))
            }} />
        </>
    )
}