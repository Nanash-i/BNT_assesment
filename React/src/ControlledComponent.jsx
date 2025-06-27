import React, { useState } from 'react'

const ControlledComponent = () => {
    const [value,setValue]=useState("")
  return (
    <>
    <h1>Example of Controlled Components:</h1>
    <div className="Controlled-input">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {value}</p>
    </div>
    </>
  )
}

export default ControlledComponent