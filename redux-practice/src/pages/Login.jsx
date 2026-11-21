import { useDispatch } from "react-redux";
import { useState } from "react";
import {login} from "../features/auth/authSlice"
import {useNavigate} from "react-router-dom"

function Login(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [userName,setUserName]=useState("")
     const [password,setPassword]=useState("")
    
     function handleLogin(){
        if(userName&&password){
            const token="my-dummy-password"
        localStorage.setItem("token",token);
        localStorage.setItem("user", userName);
        dispatch(login({
            user:userName,
            token:token
        
        }))
        navigate("/dashboard")
    }
     }
    return (
        <div>
<h2>Login page</h2>
<input
type="text"
placeholder="Enter your name"
value={userName}
onChange={(e)=>setUserName(e.target.value)}
/>
<input
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;