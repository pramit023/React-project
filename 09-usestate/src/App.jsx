import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function jump5Num(){
    setNum(num+5)
  }
  return (

    <div>
      <h1>{num}</h1>
      <button className='increase' onClick={increaseNum}>Increase</button>
      <button  className='decrease' onClick={decreaseNum}>Decrease</button>
      <button className='jump5' onClick={jump5Num}>Increase by 5</button>
    </div>
  )
}

export default App