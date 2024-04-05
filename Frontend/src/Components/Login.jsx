import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

function Login() {
    const navigate = useNavigate();
    const {setIsAuth} = useContext(AuthContext);
    const formStyles = {
        display : "flex",
        flexDirection : "column",
        gap:"3px",

    }
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [info,setInfo] = useState(JSON.parse(localStorage.getItem("data")) || {
        name: "",
        email: "",
        password: ""
    })



    function checkValidations(){
        if(data.email !== info.email){
            return alert("Email not found");
        }else if(data.password !== info.password){
            return alert("Wrong password");
        }else{
            alert("You're logged in");
            setIsAuth(true);
            return navigate("/");
        }
    }

    function handleOnSubmit(e){
        e.preventDefault();
        checkValidations();
        
    }
    function handleOnChange(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    return(
    <div>
        <h2>Login</h2>
        <form action="" onSubmit={handleOnSubmit} style= {formStyles}>
            <label htmlFor="email">
                Email: <input type="text" name="email" id="email" value={data.email} onChange={(e) => handleOnChange(e)}/>
            </label>
            <label htmlFor="password">
                Password: <input type="text" name="password" id="password" value={data.password} onChange={(e) => handleOnChange(e)}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
    )}

export default Login