import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Products from './Components/Products';
import PrivateRoute from './Components/PrivateRoute';

function MainRoutes() {
  return (
  <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
            <Route path='/products' element={<Products />} />
        </Route>
    </Routes>
  </>
  )
}

export default MainRoutes;