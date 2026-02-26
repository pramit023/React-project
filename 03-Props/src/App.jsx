
import React from 'react'
import Card from './components/card'

function App() {
  return (
    <div>
      <Card user='Pramit' age={20} img="https://images.unsplash.com/photo-1770347258014-06c8acdb77c3?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Priyanshu" age={21} img="https://images.unsplash.com/photo-1770217685932-5e20c643c4f6?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Sameer" age={22} img="https://plus.unsplash.com/premium_photo-1686358419835-1b7113d862cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
  )
}

export default App