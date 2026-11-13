import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    return (
        <div>
            {user ? user.name : "Guest"}

            {isLoggedIn && (
                <button onClick={() => dispatch(logout())}>
                    Logout
                </button>
            )}
        </div>
    );
}

export default Navbar;