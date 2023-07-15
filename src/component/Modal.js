import React from 'react'
import { deletePosts } from '../redux/features/postSlice'
import { useDispatch } from 'react-redux'

function Modal({id,handleOpen}) {
    const dispatch=useDispatch();
    const handleDelete=(i)=>{
        dispatch(deletePosts(i))
    }
  return (
    <div className='modal'>
        <div className='container'>
      <div>are you sure to delete this post?</div>
      <button onClick={()=>handleDelete(id)}>yes</button>
      <button onClick={()=>handleOpen()} handleOpen>no</button>
    </div>
    </div>
  )
}

export default Modal

