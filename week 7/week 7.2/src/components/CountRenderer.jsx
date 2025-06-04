import { useAtomValue } from "jotai";
import { countAtom } from "./store/atoms/count";

export default function CountRenderer() {
    const count = useAtomValue(countAtom);

    return (
        <>
            <h2>{count}</h2>
            <br />
        </>
    )
}