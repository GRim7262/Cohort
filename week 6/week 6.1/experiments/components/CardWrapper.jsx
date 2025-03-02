export function CardWrapper({ children }) {
    return (
        <div style={{
            border: "2px solid black",
            padding: "5px",
            marginBottom: "5px"
        }}>
            {children}
        </div>
    )
}