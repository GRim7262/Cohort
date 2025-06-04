import Button from "./Button";
import CountRenderer from "./CountRenderer";
import IsEvenOdd from "./IsEvenOdd";

export default function Count() {
    console.log('Count re-render')
    return (
        <>
            <CountRenderer />
            <Button />
            <IsEvenOdd />
        </>
    )
}