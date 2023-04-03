import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePages from './pages/HomePages'
import Slider from './components/layout/slider'
import Products_detail from './pages/products-detail'
import Layout from './pages/Admin/Admin_Layout'
import Login from './pages/Client/login'
import Signup from './pages/Client/signup'
import ProductsAdmin from './pages/Admin/Products/productsAdmin'
import AddProducts_Admin from './pages/Admin/Products/AddProducts_Admin'
import EditProducts_Admin from './pages/Admin/Products/EditProducts_Admin'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index path='/' element={<HomePages />} />
        <Route path='products-detail/:id' element={<Products_detail />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />

      </Route>
      <Route path='/admin' element={<Layout />}>
        <Route index path='/admin' element={<ProductsAdmin />} />
        <Route path='add-products' element={<AddProducts_Admin />} />
        <Route path='edit-products/:id' element={<EditProducts_Admin />} />
      </Route>


    </Routes>
  </BrowserRouter>
}

export default App