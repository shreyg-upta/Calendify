import {useState } from 'react'
import Card from '../atoms/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const name ="Guest";
  return (
    <>
       <h1>{name}, you might like</h1>
      <Card imgURL={"test-img.png"} title={"Lorem Ipsum"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} linkss={"https://bp-gc.in/dnc"}/>
    </>
  )
}

export default App
