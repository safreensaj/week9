import { useSelector,useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
function TaskList(){
    const dispatch=useDispatch();
const tasks=useSelector((state)=>state.tasks.tasks)
return (
    <div>
<button onClick={()=>dispatch(addTask("Learn Redux"))}>AddTask</button>
{tasks.map((task, index) => (
    <p key={index}>{task}</p>
))}
    </div>
)
}
export default TaskList;