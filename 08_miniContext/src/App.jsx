import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Hello React </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
