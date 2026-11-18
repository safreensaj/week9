import { useDispatch,useSelector } from "react-redux";
import { fetchTasks } from "./features/tasks/taskSlice";
import { useEffect } from "react";
function App(){
  const dispatch=useDispatch();
  const {tasks,loading,error}=useSelector((state)=>state.tasks);
  useEffect(()=>{
dispatch(fetchTasks())
  },[dispatch])
  if(loading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>Error: {error}</h2>
  }
  return (
    <div>
      <h1>Task Management</h1>
      {tasks.map((task)=>(
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  )
}
export default App;