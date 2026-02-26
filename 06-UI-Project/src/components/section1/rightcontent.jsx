import React from 'react'
import Rightcard from './Rightcard'
import 'remixicon/fonts/remixicon.css'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 flex p-6 rounded-4xl overflow-x-auto flex-nowrap gap-10 '>
       {props.users.map(function(elem,idx){
        return <Rightcard 
        key={idx}
        img={elem.img}
         tag={elem.tag}
         id={idx}
         />
      })} 
     
    </div>
  )
}

export default Rightcontent