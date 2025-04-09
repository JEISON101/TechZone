
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Products } from './pages/productos/products'
import { Detalles } from './pages/detallesProducto/Detalles'
import { Carrito } from './pages/carro/Carrito'

function App() {

  const listaProductos = [{id:1, nombre:'Ryzen 5 5500', precio:340000},
    {id:2, nombre:'Monitor LG 27" FHD', precio:2800000},
    {id:3, nombre:'SSD 2TB HD2', precio:650000}
  ]

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products productos={listaProductos}/>}/>
          <Route path='/detalles:id' element={<Detalles/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
