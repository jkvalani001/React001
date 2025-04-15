import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={name:"jk",age:20}
  let myArr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind......</h1>
      <Cards userName="Python" btnText="Decorators" />
      <Cards userName="Java" btnText="closure" />
    </>
  )
}

export default App
