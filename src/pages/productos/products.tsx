interface TipoProductos {productos:object[]}

export const Products : React.FC <TipoProductos> = ({productos}) => {
    return(
        <>
            <div>
                {productos.length > 0 ? (productos.map((product, index)=> (
                    <div key={index}>
                        <h1>{product.nombre}</h1>
                        <h2>{product.precio}</h2>
                    </div>
                    )))
                    :
                    (<h1>No hay productos disponibles</h1>)}
            </div>
        </>
    )
}