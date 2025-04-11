import { useNavigate } from "react-router-dom";

interface Producto {
  id:string;
  nombre: string;
  precio: number;
  detalles?:string;
}

interface TipoProductos {
  productos: Producto[];
}

export const Products: React.FC<TipoProductos> = ({ productos }) => {
    const navigate = useNavigate();
  return (
    <>
      {productos.length > 0 ? (
        productos.map((product) => (
          <div key={product.id} className="card-producto">
            <h1>{product.nombre}</h1>
            <h2>precio: ${product.precio}</h2>
            <button onClick={()=>navigate(`/Detalles/${product.id}`, {state:product})}>Ver detalles</button>
          </div>
        ))
      ) : (
        <h1>No hay productos disponibles</h1>
      )}
    </>
  );
};
