export function Card({ children }) {
    return <div style={{
        border: "2px solid black",
        margin: "10px",
        padding: "10px"
    }}>
        {children}
    </div>
}