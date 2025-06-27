import React from 'react'

const ArrayComponent = () => {

  let array=["John","Jane","Alex"];


  return (
    <>
      <h1>Example of List Rendering:</h1>
       <ul>
        {array.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

    
    
    </>
  )
}

export default ArrayComponent