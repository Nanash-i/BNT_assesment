import React from 'react'

const InputChildComponent = ({label,placeholder,name,onChange,value}) => {
  return (
    <>
    <h1>Example of Reusable Component</h1>
    <div className='reusable-input-component'>
    <label htmlFor={name}>{label}:</label>
    <input 
     type='text'
     name={name}
     id={name}
     value={value}
     placeholder={placeholder}
     onChange={onChange}
    />
    </div>
    </>
  )
}

export default InputChildComponent