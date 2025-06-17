import { useAtomValue } from "jotai";
import { loadableNotificationsAtom } from "../store/atoms";

export default function TotalButton() {
    const { state, error, data } = useAtomValue(loadableNotificationsAtom);

    if (state === "hasError") return <h1>Error occured... {error.message}</h1>
    if (state === "loading") return <h1>Loading total...</h1>

    const total = data?.total ?? 0;
    console.log("Final Total:", total);

    return (
        <>
            <button>Me ({total})</button>
        </>
    )
}