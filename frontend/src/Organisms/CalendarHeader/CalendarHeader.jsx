import {useState } from 'react'
import styles from './CalendarHeader.module.css'
import logo from '../../assets/react.svg'
function App() {
  const [count, setCount] = useState(0)
  const name ="Guest";
  return (
    <div className={styles.main}>
       <img src={logo} className={styles.logo} alt="logo" />
       <div className={styles.nextButton}>
        <span>Next</span>
       </div>
    </div>
  )
}

export default App
