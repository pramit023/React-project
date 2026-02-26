
import React ,{useState} from 'react'


const App = () => {

const [num, setNum] = useState({user:'pramit',age:20})

const btnClicked=()=>{

  const newNum={...num};
  newNum.user='Priyanshu'
  newNum.age='21'
  setNum(newNum)

}
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App