import React from 'react'

const App = () => {
  function inputchanging(val){
    console.log(val)
  console.log("user is typing");
    

  }
  return (
    <div>
     <input onChange={function(elem){
      inputchanging(elem.target.value)
     }

     } type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default App
