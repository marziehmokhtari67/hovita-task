import React from 'react'
import { deletePosts, fetchPosts } from '../redux/features/postSlice'
import { useDispatch } from 'react-redux'
import { unwrapResult } from "@reduxjs/toolkit";

function Modal({id,handleopen}) {
    const dispatch=useDispatch();
    const handleDelete=(i)=>{
        dispatch(deletePosts(i)).then(unwrapResult).then(()=>{
            dispatch(fetchPosts())
        })
        
    }
  return (
    
    <div className='modal'>
        <div className='container'>
      <div>are you sure to delete this post?</div>
      <button onClick={()=>handleDelete(id)}>yes</button>
      <button onClick={()=>handleopen()} handleOpen>no</button>
    </div>
    </div>
  )
}

export default Modal

