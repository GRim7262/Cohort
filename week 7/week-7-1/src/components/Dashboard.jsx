export default function Dashboard() {
    return (
        <>
            Dashboard Page
            <hr />
            <Boldify>
                Hello
            </Boldify>
            <Boldify>
                my
            </Boldify>
            <Boldify>
                name
            </Boldify>
            <Boldify>
                is
            </Boldify>
            <Boldify>
                Vinal
            </Boldify>
        </>
    )
}

function Boldify({ children }) {
    return <b>
        {`${children} `}
    </b>
}