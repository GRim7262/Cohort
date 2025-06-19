import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { TODOS } from '../todos'

export const todoAtomFamily = atomFamily((id) =>
    atom(() => TODOS.find(todo => todo.id === id))
);