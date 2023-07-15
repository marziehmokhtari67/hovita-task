import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'


import{useState} from  'react'
import Modal from './Modal'
function Card({title,body,id,userId}) {
   
    const[open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(!open)
    }
   
  return (
    <div className="card">
        <div className='icon-container'>
        <AiOutlineEdit className='icon'/>
        
        <BsTrash className='icon' onClick={()=>handleOpen()} />
        {
            open && <Modal id={id} handleOpen={handleOpen}/>
        }
        </div>
        <div>
      <p>title:{title}</p>
      <p>body:{body}</p>
      </div>
    </div>
  )
}

export default Card
