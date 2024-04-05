import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const formStyles = {
        display : "flex",
        flexDirection : "column",
        gap:"3px",

    }
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        localStorage.setItem("data",JSON.stringify(data))
    },[data])
    
    function handleOnSubmit(e){
        e.preventDefault();
        console.log(data);
        navigate('/login');
    }
    function handleOnChange(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })  
    }
    // console.log(data);
  return (
    <div>
            <h2>SignUp</h2>
        <form action="" onSubmit={handleOnSubmit} style= {formStyles}>
            <label htmlFor="name">
                Name: <input type="text" name="name" id="name" value={data.name} onChange={handleOnChange}/>
            </label>
            <label htmlFor="email">
                Email: <input type="text" name="email" id="email" value={data.email} onChange={(e) => handleOnChange(e)}/>
            </label>
            <label htmlFor="password">
                Password: <input type="text" name="password" id="password" value={data.password} onChange={(e) => handleOnChange(e)}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SignUp