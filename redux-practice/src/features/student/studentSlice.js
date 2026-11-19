import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:"students",
    initialState:{
       students:[{
        id:1,
        name:"Anu",
        marks:{
            maths:80,
            science:90
        }
       },
       {
        id:2,
        name:"Rahul",
        marks:{
            maths:70,
            science:85
        }
       }]
    },
    reducers:{
        updateMathMark:(state,action)=>{
     const student=state.students.find((s)=>s.id===action.payload.id);
     if(student){
        student.marks.maths=action.payload.marks
     }
        }
    }
})
export const {updateMathMark}=studentSlice.actions;
export default studentSlice.reducer;