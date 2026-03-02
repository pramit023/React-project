
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData= async ()=>{
     const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

     setUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[index])

     let printUserData=<h3 className= 'text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>
     if(userData.length>0){
      printUserData=userData.map(function(elem,idx){
        return <div key={idx}>
          <a href={elem.url}>
         <div className='h-50 w-54 bg-white rounded-xl overflow-hidden'>
         <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
         </div>
         <h2 className='font-bold text-lg'>{elem.author}</h2>
         </a>
         </div>

      }
    )
  }
  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto'>
  
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>

        <button style={{opacity:index==1?0.5 : 1}}
        className='bg-amber-600 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            if(index > 1){
              setIndex(index-1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button className='bg-amber-600 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold' 
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App