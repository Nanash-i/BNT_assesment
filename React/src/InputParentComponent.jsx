import React, { useState } from 'react'
import InputChildComponent from './InputChildComponent';

const InputParentComponent = () => {
   const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
    <InputChildComponent
        label="Username"
        placeholder="Enter your username"
        name="username"
        onChange={handleChange}
        value={value}/>
    <p>Value: {value}</p>
    
    </>
  )
}

export default InputParentComponent