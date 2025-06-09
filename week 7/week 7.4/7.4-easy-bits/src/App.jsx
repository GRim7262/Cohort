import { useAtomValue } from "jotai"
import { networkAtom } from "./store/atoms";

function App() {
  const networkNotificationCount = useAtomValue(networkAtom);
  return (
    <>
      <button>Home</button>

      <button>My network {networkNotificationCount}</button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notifications ()</button>

      <button>Me</button>
    </>
  )
}

export default App
