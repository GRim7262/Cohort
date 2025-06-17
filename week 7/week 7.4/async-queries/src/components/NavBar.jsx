import { useAtomValue } from "jotai"
import { loadableNotificationsAtom } from "../store/atoms"

export default function NavBar() {
    const notifications = useAtomValue(loadableNotificationsAtom);
    const { state, error, data } = notifications;

    if (state === 'hasError') return <h1>Error Occured: {error.message}</h1>
    if (state === 'loading') return <h1>Loading...</h1>
    const total = data?.total ?? 0;

    return (
        <>
            <button>Home</button>

            <button>My Network ({data.network >= 100 ? "99+" : data.network})</button>
            <button>Jobs ({data.jobs >= 100 ? "99+" : data.jobs})</button>
            <button>Messaging ({data.messaging >= 100 ? "99+" : data.messaging})</button>
            <button>Notifications ({data.notifications >= 100 ? "99+" : data.notifications})</button>

            <button>Me ({total})</button>
        </>
    )
}