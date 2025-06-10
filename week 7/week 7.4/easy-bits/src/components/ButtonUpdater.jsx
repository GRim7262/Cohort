import { useSetAtom } from "jotai"
import { messagingAtom } from "../store/atoms"


export default function ButtonUpdater() {
    const setMessagingAtomCount = useSetAtom(messagingAtom);

    return (
        <>
            <button onClick={() => setMessagingAtomCount((prev) => prev + 1)}>Me</button>
        </>
    )
}