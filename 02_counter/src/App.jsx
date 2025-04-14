import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // let counter=4
  let [counter,setCounter]=useState(4)

  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1)
    }else{
      alert(`Value is going to be <=${counter}`)
    }
    
  }

  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }else{
      alert(`Value is going to be>=${counter}`)
    }
  }

  return (
    <>
      <h1>Jainam the Sledge Master</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
