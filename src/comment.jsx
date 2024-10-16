export default function Comment(post){
return (
    <div className="box">
      <h4>Name:{post.name}</h4>
      <p>emal:{post.email}</p>
      <p>Comment:</p>
    </div>
)
}