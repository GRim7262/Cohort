import { useAtom, useAtomValue } from "jotai"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "./store/atoms"
import ButtonUpdater from "./components/ButtonUpdater";

function App() {
  const networkAtomCount = useAtomValue(networkAtom);
  const jobsAtomCount = useAtomValue(jobsAtom);
  const messagingAtomCount = useAtomValue(messagingAtom);
  const notificationsAtomCount = useAtomValue(notificationsAtom);

  return (
    <>
      <button>Home</button>

      <button>My network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount >= 100 ? "99+" : messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount >= 100 ? "99+" : notificationsAtomCount})</button>

      <ButtonUpdater />
    </>
  )
}

export default App
