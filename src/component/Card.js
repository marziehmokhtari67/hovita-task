import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
function Card({title,body}) {
  return (
    <div className="card">
        <div className='icon-container'>
        <AiOutlineEdit className='icon' onClick={()=>console.log("edit")}/>
        <BsTrash className='icon' onClick={()=>console.log("delete")}/>
        </div>
        <div>
      <p>title:{title}</p>
      <p>body:{body}</p>
      </div>
    </div>
  )
}

export default Card
