import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Seiyuu from './pages/Seiyuu';


const router = createBrowserRouter([
  {
  path: `/`,
  element: <Home />
  },

  {
    path: `/about`,
    element: <About />
  },

  {
    path: `/seiyuu`,
    element: <Seiyuu />
  }

]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
