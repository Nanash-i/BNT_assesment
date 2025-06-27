import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
    const childMessage="Hello From GrandPrents"
  return (
    <>
    <Parent childMessage={childMessage}/>
    </>
  )
}

export default GrandParent