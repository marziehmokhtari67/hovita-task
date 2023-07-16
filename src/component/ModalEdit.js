import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
function ModalEdit({title,body,handleOpenEdit}) {
    //const handleEdit=()
  return (
   
    <div className='modal'>
        <AiOutlineCloseCircle className="icon" onClick={()=>handleOpenEdit() }/>
      <form>
        <div>title:</div>
        <input defaultValue={title}></input>
        <div>body:</div>
        <input defaultValue={body}></input>
        <button>Edit</button>
      </form>
    </div>
  )
}

export default ModalEdit

