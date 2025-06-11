import { useAtomValue, useSetAtom } from "jotai"
import { messagingAtom, totalNotificationAtom } from "../store/atoms"


export default function ButtonUpdater() {
    const setMessagingAtomCount = useSetAtom(messagingAtom);
    const totalNotificationAtomCount = useAtomValue(totalNotificationAtom);

    return (
        <>
            <button onClick={() => setMessagingAtomCount((prev) => prev + 1)}>Me ({totalNotificationAtomCount})</button>
        </>
    )
}