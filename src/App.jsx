
import './App.css'
import Counter from './count'
import Team from './team'
import User from './user'
import Friends from './friends'
import Comments from './comments'

function App() {
 function handleclick(){
alert('button  Click')
 }
 const handleclick2=()=>{
alert('button  Click 2')
 }
 const addfive=(num)=>{
alert(num+5)
 }

  return (
    <>

      <h3>React core conceept 2</h3>
      <Comments></Comments>
      <Counter></Counter>
      <Friends></Friends>
      <User></User>
      <Team></Team>    

      <button onClick={handleclick}>Click me</button>
      <button onClick={handleclick2}>Click me 2</button>
      <button onClick={()=>{alert('button  Click 3') }}>Click me 3</button>
      <button onClick={()=>addfive(5)}>Click me 4</button>
      
    </>
  )
}

export default App
