export default function Button({ setCount }) {
    return (
        <>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </>
    )
}