import {useState } from 'react'
import Card from '../Atoms/Card/Card';
import NavBar from '../Organisms/NavBar/NavBar';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const name ="Guest";
  return (
    <>
    <NavBar />
       <h1>{name}, you might like</h1>
      <Card imgURL={"test-img.png"} title={"Lorem Ipsum"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} linkss={"https://bp-gc.in/dnc"}/>
    </>
  )
}

export default App
