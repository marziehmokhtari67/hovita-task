
import "./App.css";
import { useEffect } from "react";
import Card from './component/Card'
import { useSelector,useDispatch } from "react-redux";
import {fetchPosts} from './redux/features/postSlice'

function App() {
const dispatch=useDispatch()
  const {posts,loading}=useSelector((state)=>state.posts)

 useEffect(()=>{
dispatch(fetchPosts())
 }

 ,[])
 
  return (
   
      
      loading?(<div>loading ...</div>)
      :(
        <div>
        <div>Post List</div>
      {
        posts.map(post=>(<Card key={post.id} {...post}/>))
      }
        </div>
        
      )
    
  
    )
 


 
  
}


export default App;
