import React, { useState } from 'react'
import Display from './Display'

export default function Counter() {
    let [counter, setCounter]=useState(0)
  return (
    <div>
        <button onClick={()=>{setCounter(counter+1)}}>{counter}</button>
        <Display/>
    </div>
  )
}
