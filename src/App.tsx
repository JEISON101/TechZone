import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Products } from "./pages/productos/products";
import { Detalles } from "./pages/detallesProducto/Detalles";
import { Carrito } from "./pages/carro/Carrito";

function App() {
  const listaProductos = [
    {
      id: "A1B2C3D4",
      nombre: "Ryzen 5 5500",
      precio: 340000,
      detalles: "Procesador de 6 núcleos y 12 hilos, ideal para gaming y tareas multitarea."
    },
    {
      id: "E5F6G7H8",
      nombre: 'Monitor LG 27" FHD',
      precio: 2800000,
    },
    {
      id: "I9J0K1L2",
      nombre: "SSD 2TB HD2",
      precio: 650000,
      detalles: "Unidad de estado sólido de 2TB con interfaz SATA III, velocidad de lectura hasta 550 MB/s."
    },
    {
      id: "M3N4O5P6",
      nombre: "Teclado Mecánico RGB",
      precio: 240000
    },
    {
      id: "Q7R8S9T0",
      nombre: "Tarjeta Gráfica NVIDIA RTX 4060",
      precio: 4800000,
      detalles: "GPU de última generación con 8GB de VRAM GDDR6, ideal para juegos en alta resolución y trabajo gráfico."
    }
  ];  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products productos={listaProductos} />} />
          <Route path="/detalles/:id" element={<Detalles />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
