import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="count">
        <button onClick={() => setCount(prev=>(prev===10?0:prev+1))}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Counter
