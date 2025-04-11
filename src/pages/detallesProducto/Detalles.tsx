import { useLocation, useNavigate } from "react-router-dom";

export const Detalles: React.FC = () => {
  const ruta = useLocation();
  const producto = ruta.state;
  const navigate = useNavigate();
  return (
    <>
      {producto.detalles ? (
        <div className="details">
          <h1>Detalles</h1>
          <h2>{producto.nombre}</h2>
          <p>{producto.detalles}</p>
          <div className="carrito">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3825/3825062.png"
              onClick={() => navigate("/Carrito")}
            />
          </div>
        </div>
      ) : (
        <div>
          <h2>404 Not found</h2>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/024/217/744/small_2x/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.png" />
        </div>
      )}
      <button onClick={()=>navigate('/')}>Volver</button>
    </>
  );
};
