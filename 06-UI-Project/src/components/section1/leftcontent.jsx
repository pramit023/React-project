import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/3 ml-5 flex  flex-col justify-between'>
      <div className=' mt-8 p-4' >
           <h3 className='text-4xl font-bold mb-5'>Prospective <br /> <span className='text-gray-500'>customer</span> <br />segmentation</h3>
           <p className='text-1xl text-gray-600 font-medium w-2/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sequi fugiat dolor incidunt beatae. Molestiae laudantium deleniti soluta aperiam id?</p>
      </div>
      <div>
        <i className="ri-arrow-right-up-line text-6xl"></i>
      </div>
    </div>
  )
}

export default Leftcontent