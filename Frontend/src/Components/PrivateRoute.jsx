import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Link, Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    const {isAuth} = useContext(AuthContext);
  return (
    <div>
        {isAuth ? <Outlet />  : <Navigate to={"/login"}/> }
    </div>
  )
}

export default PrivateRoute;