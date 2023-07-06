import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {router} from './router/'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Se reemplaza el App por RouterProvider y le pasamos el props que creamos */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
