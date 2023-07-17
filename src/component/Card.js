import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import{BiArchiveIn} from 'react-icons/bi'
import {useSelector,useDispatch} from 'react-redux'
import { handleArchive } from '../redux/features/postSlice'
import{useState} from  'react'
import Modal from './Modal'
import ModalEdit from './ModalEdit'
function Card({title,body,id,userId}) {
  const item={title,body,id,userId}
  const[showtoolTip,setShowtoolTip]=useState(false)
  const handleTooltips=()=>{
setShowtoolTip(true);
setTimeout(()=>setShowtoolTip(false)
,2000)
  }
  const {archivedpost}=useSelector(state=>state.posts)
   const dispatch=useDispatch()
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
        <BiArchiveIn className=' archived-icon' onClick={()=>{dispatch(handleArchive(item))
        handleTooltips()
        }}/>
       {showtoolTip && <div className="tooltips">post was archived </div> } 
        </div>
        <div>
      <p>title:{title}</p>
      <p>body:{body}</p>
      </div>
    </div>
  )
}

export default Card
