import { useState } from "react"

export default function Counter(){
    const [count,setcount]=useState(30)
    const handleadd =()=>{
        const newcount=count+1
        setcount(newcount)
    }
    const handlesub =()=>{
        const newcount=count-1
        setcount(newcount)
    }
  
    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleadd}>add</button>
            <button onClick={handlesub}>sub</button>
        </div>
    )
}