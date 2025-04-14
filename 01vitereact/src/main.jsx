import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>Lord Jackness is dead..........</h2>
    </div>
  )
}


const userName="Jainam"
// JSX element, no need to call it as a function
// const anotherReactElement = (
//   <a href="https://google.com" target='_blank'>{userName} Google</a>
// )

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  userName + 'Google' // ← this is the text content
);



createRoot(document.getElementById('root')).render(reactElement); 
