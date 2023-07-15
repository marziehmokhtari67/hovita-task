import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState={
    loading:false,
    posts:[]
}
export const fetchPosts=createAsyncThunk("posts/fetchPosts",async()=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data=response.json;
    return data

}
)
 export const postSlice=createSlice({
   name:"posts" ,
   initialState,
   extraReducers: (builder) => {
    //get product
   builder.addCase(fetchPosts.pending, (state) => {
     return { ...state, loading: true };
   });
   builder.addCase(fetchPosts.fulfilled, (state, action) => {
     return {
       ...state,
       loading: false,
       posts: action.payload.data,
       
     };
    })
}
})
export default postSlice.reducer