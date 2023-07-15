import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
function Card({title,body}) {
  return (
    <div>
        <div>
        <AiOutlineEdit/>
        <BsTrash/>
        </div>
        <div>
      <p>title:{title}</p>
      <p>body:{body}</p>
      </div>
    </div>
  )
}

export default Card
