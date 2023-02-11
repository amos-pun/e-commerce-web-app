import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Cart from './Pages/Cart'
import Home from './Pages/Home'

const MyRoutes = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>

        </Routes>
      </HashRouter>
    </React.StrictMode>
   
  )
}

export default MyRoutes