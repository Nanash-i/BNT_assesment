import React from 'react'
import Child from './Child'

const Parent = ({childMessage}) => {
  return (
    <>
    <Child message="Good Morning" childMessage={childMessage}/>
    </>
  )
}

export default Parent