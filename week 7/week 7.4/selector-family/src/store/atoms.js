import { atomFamily } from 'jotai/utils'
import { atom } from 'jotai'
import { loadable } from 'jotai/utils';

export const loadableTodoAtomFamily = atomFamily((id) =>
    loadable(
        atom(async () => {
            const response = await fetch(`https://sum-server-9unv.onrender.com/todo?id=${id}`);
            const data = await response.json();
            return data.todo;
        })
    )
)
