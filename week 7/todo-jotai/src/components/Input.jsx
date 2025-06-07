import { useAtom } from "jotai";
import { todoAtom } from "../store/todos";
import { useRef } from "react";

let id_to = 0;
// let timeout1, timeout2;

export default function Input() {
    const [todo, setTodo] = useAtom(todoAtom);
    const timeout1 = useRef(null);
    const timeout2 = useRef(null);

    return (
        <>
            <input type="text" placeholder="Title" onChange={(e) => {
                clearTimeout(timeout1.current);
                timeout1.current = setTimeout(() => {
                    setTodo({ ...todo, title: e.target.value })
                }, 1000);
            }} />
            <br /> <br />
            <input type="text" placeholder="Description" onChange={(e) => {
                clearTimeout(timeout2.current);
                timeout2.current = (setTimeout(() => {
                    setTodo({ ...todo, description: e.target.value })
                }, 1000))
            }} />
        </>
    )
}