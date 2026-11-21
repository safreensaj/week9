 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";
 import {useNavigate} from "react-router-dom"
 import { logout } from "../features/auth/authSlice";
 function DashBoard(){
    const user = useSelector((state) => state.auth.user);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function handleLogout(){
dispatch(logout())
navigate("/")
    }
    return (
        <div>
            <h2>Welcome {user}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default DashBoard;