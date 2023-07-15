
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
   
      
      loading?(<div className="loading">loading ...</div>)
      :(
        <div>
        <div>Post List</div>
        <div className="post-container">
      {
         posts.map(post=>(<Card key={post.id} {...post}/>))
      }
        </div>
        </div>
        
      )
    
  
    )
 


 
  
}


export default App;
