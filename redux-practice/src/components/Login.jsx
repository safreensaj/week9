import { useDispatch,useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useState } from "react";
function Login(){
  const { isLoggedIn, user, token } = useSelector(
  (state) => state.auth
);
   const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
  const dispatch=useDispatch();
  function handleLogin(){

    dispatch(login({
      user:{
      name,
      email
  },
  token: "demo-token"
}))
  }
  return (
    <div>
<input
name="name"
type="text"
placeholder="Enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<input
name="email"
type="text"
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
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