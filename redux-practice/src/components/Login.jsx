import { useDispatch,useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

function Login(){
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  const dispatch=useDispatch();
  function handleLogin(){
      dispatch(login({
        name:"Safreen",
        email:"saf@gmail.com"
      }))
  }
  return (
    <div>
      <h1>Login Page</h1>
     {!isLoggedIn &&( <button onClick={()=>handleLogin()}>Login</button>)}
    </div>
  )
}
export default Login