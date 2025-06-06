import { atom } from "jotai"

export const todoAtom = atom({
    id_todo: 0,
    title: "",
    description: ""
});

export const originalTodosAtom = atom([]);

export const filterWordAtom = atom("");

export const filteredTodoAtom = atom((get) => {
    const originalTodos = get(originalTodosAtom);
    const filter = get(filterWordAtom).toLowerCase();

    return originalTodos.filter((x) =>
        x.id_todo.toString() === filter ||
        x.title.toLowerCase().includes(filter) ||
        x.description.toLowerCase().includes(filter))
})