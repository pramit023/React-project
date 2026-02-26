import React, { useState } from 'react'

const App = () => {

  const [title, setTitle ] = useState('')
  const [details, setDetails] = useState('')

const [task, setTask] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault()

    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)

    console.log(task);
  
    
    setTitle('')
    setDetails('')
  }

    const deleteNote=(idx)=>{
      const copyTask=[...task]
      copyTask.splice(idx,1)
      setTask(copyTask)

    }
  return (
    <div className='h-full lg:flex bg-black text-white'>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
       
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input onChange={(e)=>{
          setTitle(e.target.value)
        }}
        type="text"
         placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
         />

        <textarea  type="text" className='px-5 w-full font-medium py-2 border-2 h-32 items-start flex-row outline-none rounded '
        placeholder='Write details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)

        }}
        />
        
          <button className='bg-white active:scale-90 font-medium w-full outline-none text-black rounded px-5 py-2'> Add Note </button>


      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
           {task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between relative h-52 w-40 rounded-xl bg-cover bg-center px-6 py-8 pb-3 text-black flex-col"  style={{
    backgroundImage: "url('https://i.pinimg.com/1200x/2a/9b/24/2a9b24cc375edc2aca3f434f39ba1d92.jpg')" }}>
               <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-sm text-gray-500'>{elem.details}</p>
               </div>
               <button onClick={()=>{
                deleteNote(idx)
               }} className='bg-red-500 p-1 rounded-xl w-full text-white text-xs cursor-pointer active:scale-90'>Delete</button>
              </div>
            })}
          </div>
         
         

        </div>
      </div>
  )
}

export default App