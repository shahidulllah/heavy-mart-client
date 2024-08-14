import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route'
import { createRoot } from 'react-dom/client'



createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
