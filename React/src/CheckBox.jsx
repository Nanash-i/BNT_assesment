import React, { useState } from 'react'

const CheckBox = () => {

    const[checkBox,setCheckBox]=useState(false); 
    
  return (
    <>
    <div className="check">
      <input
        type="checkbox"
        id="myCheckbox"
        checked={checkBox}
        onChange={e => setCheckBox(e.target.checked)}
      />
      <label htmlFor="myCheckbox"> Check me</label>
      {checkBox && <div>You checked the box!</div>}
    </div>
    </>
  )
}

export default CheckBox