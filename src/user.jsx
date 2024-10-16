import { useState ,useEffect } from "react"

export default function User(){
    const [users,setusers]=useState([])
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setusers(data))
    },[])
    return (
    <div>
        <h3>User: {users.length}</h3>
    </div>
    )
}