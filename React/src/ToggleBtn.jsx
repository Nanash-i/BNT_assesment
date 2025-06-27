import React, { useState } from 'react'

const ToggleBtn = () => {

    const [message,setMessage]=useState("Hello");

   const toggleMessage = () => {
    setMessage(prev => (prev === 'Hello' ? 'Welcome Back' : 'Hello'));
  };

  return (
    <>
    <div className="toggle-btn">
        <h1>{message}</h1>
        <button onClick={toggleMessage} > Toggle</button>
    </div>

    </>
  )
}

export default ToggleBtn