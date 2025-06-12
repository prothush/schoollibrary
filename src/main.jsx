import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Register from './Pages/Register.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Home from './Pages/Home.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login.jsx';
import AddBook from './Pages/AddBook.jsx';
import PrivateRoute from './Contexts/PrivateRoute.jsx';
import AllBooks from './Pages/AllBooks.jsx';
import UpdateBook from './Pages/UpdateBook.jsx';
import Category from './Components/Category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/addBooks",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: "/allBooks",
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
      },
      {
        path: "/updateBook/:id",
        loader: ({params})=>fetch(`http://localhost:3000/books/${params.id}`),
        element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>
      },
      {
        path: "/category/:name",
        
        element: <Category></Category>
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  },

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
