import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState={
    loading:false,
    posts:[]
}
export const fetchPosts=createAsyncThunk("posts/fetchPosts",async()=>{
    return axios
      .get("https://jsonplaceholder.typicode.com/posts"
     )
      .then((res) => {
        return { data: res.data, headers: res.headers["x-total-count"] };
      })
      .catch((error) => error.message);
  }


)

 export const postSlice=createSlice({
   name:"posts" ,
   initialState,
   extraReducers:  {
    //get posts
//   
[fetchPosts.pending]: (state) => {
    state.loadings= true
},
[fetchPosts.fulfilled]: (state , action) => {
    state.loadings= false;
    state.posts= action.payload.data
},
}
})
export default postSlice.reducer