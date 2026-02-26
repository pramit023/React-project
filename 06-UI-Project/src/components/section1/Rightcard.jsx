import React from 'react'
import Rightcardcontent from './Rightcardcontent'


const Rightcard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative  rounded-3xl '>
      <img className='h-full w-full object-cover' src={props.img}  alt="" />

     <Rightcardcontent  id={props.id} tag={props.tag} />
    </div>
  )
}

export default Rightcard