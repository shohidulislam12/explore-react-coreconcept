import { useEffect, useState } from "react"
import Comment from "./comment"
export default function Comments(){
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>res.json())
        .then((data)=>setPost(data))
    },[])
    return(
        <div>
            <h3>comments :{post.length}</h3>
            {
                post.map(post=><Comment post={post}></Comment>)
            }
        </div>
    )
}