import React from 'react'
import {Bookmark} from 'lucide-react'

const Card=(props)=> {
  console.log(props.company)

  return (
    <div>
      <div className='card'>
        
        <div className='top'>
          <img src={props.brandlogo} alt="" />
          <button>save <Bookmark  size={12}/> </button>
 
        </div>
        <div className="centre">
          <h3>{props.company}<span>{props.dateposted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
         </div>
       </div>
        <div className="bottom">
          <div>
             <h3>{props.pay}</h3>
             <p>{props.location}</p>
          </div>
          <button>Apply now</button>

        </div>
      </div>
    </div>
  )
  
}

export default Card