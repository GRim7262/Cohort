import { useAtom } from "jotai"
import { lodableUserAtom } from "../atoms"

export default function UserInfo() {
    const [user] = useAtom(lodableUserAtom);
    const { state, error, data } = user;

    if (state === 'hasError') return <h1>Error Occured: {error.message}</h1>
    if (state === 'loading') return <h1>Loading...</h1>

    return (
        <>
            <h1>User Info</h1>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
        </>
    )
}