import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'


import{useState} from  'react'
import Modal from './Modal'
import ModalEdit from './ModalEdit'
function Card({title,body,id,userId}) {
   
    const[open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(!open)
    }
    const[openEdit,setOpenEdit]=useState(false)
   const handleOpenEdit=()=>{
    setOpenEdit(!openEdit)
   }
  return (
    <div className="card">
        <div className='icon-container' >
        <AiOutlineEdit className='icon' onClick={()=>setOpenEdit(!openEdit)} />
        { openEdit && <ModalEdit handleOpenEdit={handleOpenEdit} title={title} body={body} />}
        <BsTrash className='icon' onClick={()=>handleOpen()} />
        {
            open && <Modal id={id} handleopen={handleOpen}/>
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
