import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
