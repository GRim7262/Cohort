import CountRenderer from "./CountRenderer";
import Buttons from './Buttons'

export default function Count({ setCount }) {
    return (
        <div>
            <CountRenderer />
            <Buttons setCount={setCount} />
        </div>
    )
}