import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages'
import Certificates from './pages/Certificates'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import NuevoCertificate from './pages/nuevoCertificate'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element: <Index/>
      },
      {
        path: '/certificates',
        element: <Certificates/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/skills',
        element: <Skills/>
      },
      {
        path: '/nuevoCertificate',
        element: <NuevoCertificate/>
      },

    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
