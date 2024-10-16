export default function Friend({friend}){
    return(
        <div className="box">
            <h4>name: {friend.name} </h4>
            <p>email:{friend.email} </p>
        </div>
    )
}