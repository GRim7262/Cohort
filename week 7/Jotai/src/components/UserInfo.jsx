import { useAtom } from "jotai"
import { lodableUserAtom } from "../atoms"

export default function UserInfo() {
    const [user] = useAtom(lodableUserAtom);

    if (user.state === 'hasError') return <h1>Error Occured</h1>
    if (user.state === 'loading') return <h1>Loading...</h1>

    return (
        <>
            <h1>User Info</h1>
            <p>Name: {user.data.name}</p>
            <p>Email: {user.data.email}</p>
        </>
    )
}