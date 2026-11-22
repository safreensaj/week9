import { lazy,Suspense } from "react";
const Dashboard=lazy(()=>import("./pages/Dashboard"))
function App(){
  return (
      <div>
<Suspense fallback={<h2>Loading Dashboard..</h2>}>
  <Dashboard/>
</Suspense>
      </div>
  )
}
export default App;