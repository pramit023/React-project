import React from 'react'


const Rightcardcontent = () => {
  return (
    <div>
       <div className=' h-full w-full absolute top-0 left-0 rounded-full p-6 flex flex-col justify-between'>
               <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
      
      <div>
            <p className=' text-midsmall flex leading-7 text-white mb-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est quo ex dignissimos! Earum, ipsum.</p>
       
          <div className='flex justify-between' >
             <button  className='bg-blue-600 text-white px-6 py-2 rounded-full text-lg'>{props.tag}</button>
              <button  className='bg-blue-600 text-white font-medium px-5 py-2 rounded-full '><i className ="ri-arrow-right-line"></i> </button>
          </div>
     
        </div>
     </div>
    </div>
  )
}

export default Rightcardcontent