import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import { createBrowserRouter } from 'react-router-dom';

const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    Children:[
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
