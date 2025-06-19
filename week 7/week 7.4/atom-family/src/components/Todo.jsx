import { useAtomValue } from 'jotai'
import { todoAtomFamily } from '../store/atom'

export default function Todo({ id }) {
    const currentTodo = useAtomValue(todoAtomFamily(id))

    return (
        <>
            <h2>{currentTodo.title}</h2>
            <h4>{currentTodo.description}</h4>
            <hr />
        </>
    )
}