import {useDispatch,useSelector} from "react-redux"
import { updateMathMark } from "./features/student/studentSlice";
function App(){
  const dispatch=useDispatch();
  const students=useSelector((state)=>state.students.students);
  const handleUpdate= ()=>{
    dispatch(updateMathMark({
       id:2,
       marks:98
    }))
  }
  return (
    <div>
<button onClick={handleUpdate}>update mark</button>
{students.map((student)=>(
  <div key={student.id}>
    <h3>{student.name}</h3>
    <p>Maths: {student.marks.maths}</p>
    <p>Science: {student.marks.science}</p>
  </div>
))}
    </div>
  )
}
export default App;