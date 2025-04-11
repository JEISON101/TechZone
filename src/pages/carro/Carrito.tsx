import { useNavigate } from "react-router-dom";

export const Carrito : React.FC = () => {
    const navigate = useNavigate();
    return(
        <>
            <h1> “Gracias por visitar tu carrito”</h1>           
            <img src="https://cdn-icons-png.flaticon.com/512/3649/3649583.png" alt="imagen carrito"/>
            <button onClick={()=>navigate('/')}>Volver</button>
        </>
    )
}