import { RevenueCard } from "./components/RevenueCard"

function App() {
  return (
    <div className="grid grid-cols-5">
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
    </div>
  )
}

export default App
