import { atom } from "jotai";
import { countAtom } from "./count";

export const isEven = atom((get) => get(countAtom) % 2 === 0)