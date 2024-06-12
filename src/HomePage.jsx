import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as styles from './HomePage.module.css'
import Card from './card.jsx'

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
