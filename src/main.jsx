import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route'
import { createRoot } from 'react-dom/client'
import AuthProvider from './Provider/AuthProvider'



createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
