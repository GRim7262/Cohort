import { atom } from "jotai";
import { loadable } from 'jotai/utils'

export const counterAtom = atom(0);
export const doubledCounterAtom = atom((get) => get(counterAtom) * 2)

const asyncUserAtom = atom(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const result = await response.json();
    // console.log(result);
    return result;
});

export const lodableUserAtom = loadable(asyncUserAtom);