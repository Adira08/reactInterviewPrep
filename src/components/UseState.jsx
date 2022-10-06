import React from 'react'
import { useState } from 'react';

const UseState = () => {
    const[count,setCount] = useState(0);

    function updateCount(){
        setCount(count+1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={updateCount}>Click to +1 </button>
    </div>
  )
}

export default UseState