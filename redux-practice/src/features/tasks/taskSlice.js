import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTasks=createAsyncThunk(
  "tasks/fetchTasks",
  async()=>{
  const response=await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data
  }
)

export const taskSlice=createSlice({
  name:"task",
  initialState:{
    tasks:[],
    loading:false,
    error:null
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchTasks.pending,(state)=>{
      state.loading=true;
    })
    .addCase(fetchTasks.fulfilled,(state,action)=>{
      state.loading=false;
      state.tasks=action.payload;
    })
    .addCase(fetchTasks.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message
    })
  }
})
