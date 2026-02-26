import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-8 flex justify-between h-[90vh] gap-10 px-15'>
    <Leftcontent/>
    <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content