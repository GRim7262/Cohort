import { useAtomValue, useSetAtom } from "jotai"
import { messagingAtom, totalNotificationDerivedAtom } from "../store/atoms"


export default function ButtonUpdater() {
    const setMessagingAtomCount = useSetAtom(messagingAtom);
    const totalNotificationAtomCount = useAtomValue(totalNotificationDerivedAtom);

    return (
        <>
            <button onClick={() => setMessagingAtomCount((prev) => prev + 1)}>Me ({totalNotificationAtomCount})</button>
        </>
    )
}