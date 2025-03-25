import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0);
  const counterStyle = {
    border: '2px solid red',
    textAlign: 'center',
    padding: '10px 0px'
  }
  return(
    <div style={counterStyle}>
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count+1)}>Add</button>
      <button onClick={()=> {
        if(count>0) {
          setCount(count-1);
        }
      }}>Delete</button>
    </div>
  )
}