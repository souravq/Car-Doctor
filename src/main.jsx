import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
//import AuthProvider from './AuthContext/AuthContext'
import AuthContext from './AuthContext/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
    <AuthContext>
      <RouterProvider router={routes}/>
    </AuthContext>
    
  </React.StrictMode>
  </div>
  
)
