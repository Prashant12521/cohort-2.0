import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App