import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./pages/Login"
import ProtectedRoute from "./components/protectedRoute"
import DashBoard from "./components/DashBord"

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>

<Route path="/dashboard" element={<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
<Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;