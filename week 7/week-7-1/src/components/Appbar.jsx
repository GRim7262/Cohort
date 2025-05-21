import { useNavigate } from "react-router-dom";

export default function Appbar() {
    const navigate = useNavigate();

    return (
        <>
            <div style={{
                background: 'purple', border: '2px solid yellow',
                borderRadius: '5px', display: 'flex', justifyContent: 'space-around',
                color: 'white', fontSize: '20px', fontWeight: 'bolder'
            }}>
                <button onClick={() => navigate('/dashboard')}>DashBoard</button>
                <button onClick={() => navigate('/')}>Landing</button>
            </div>
        </>
    )
}