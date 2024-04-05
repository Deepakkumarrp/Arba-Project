import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div style={{display:"flex", gap:"4px"}}>
        <Link to="/login">
            <button>Login</button>
            </Link>
        <Link to="/signup">
            <button>SignUp</button>
        </Link>
        <Link to="/products">
            <button>Products</button>
        </Link>
    </div>
  )
}

export default Home;