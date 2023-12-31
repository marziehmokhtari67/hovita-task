import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const initialState = {
  loading: false,
  posts: [],
  archivedpost:[]
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return axios
    .get(`${baseUrl}?_page=1&_limit=15}`)
    .then((res) => {
      return { data: res.data, headers: res.headers["x-total-count"] };
    })
    .catch((error) => error.message);
});
export const deletePosts = createAsyncThunk("posts/deletePosts", async (id) => {
  
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.data)
    .catch((error) => error.message);
});
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers:{
handleArchive:(state,action)=>{
  
  state.archivedpost=[...state.archivedpost,action.payload]
 
}
  },
  extraReducers: {
    //get posts
    //
    [fetchPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.data;
    },
    //deiete posts
    [deletePosts.pending]: (state) => {
      state.loading = true;
    },
    [deletePosts.fulfilled]: (state) => {
      state.loading = false;
    },
  },
});
export default postSlice.reducer;
export const{handleArchive}=postSlice.actions