import Button from "./Button";
import CountRenderer from "./CountRenderer";

export default function Count({ setCount }) {
    console.log('Count re-render')
    return (
        <>
            <CountRenderer />
            <Button setCount={setCount} />
        </>
    )
}