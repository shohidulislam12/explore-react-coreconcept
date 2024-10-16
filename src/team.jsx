import { useState } from "react"

export default function Team(){
    const [team,setteam]=useState(11)
    const handleadd=()=>{
        const temadd=team+1;
        setteam(temadd)
    }
    const handleremove=()=>{
        const temadd=team-1;
        setteam(temadd)
    }


const teamstyle={
    border:'2px solid purple',
    margin:'15px',
    border:'1px solid red'
}

    return (
        <div style={teamstyle}>
            <h3>Players :{team} </h3>
            <button onClick={handleadd}>Add member</button>
            <button onClick={handleremove}>remove member</button>
        </div>
    )
}