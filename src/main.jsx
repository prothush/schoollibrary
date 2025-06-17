import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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
import BookDetails from './Components/BookDetails.jsx';
import BorrowedBooks from './Pages/BorrowedBooks.jsx';
import Error from './Pages/Error.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
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
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        loader: ()=>fetch("https://school-library-server.vercel.app/books")
      },
      {
        path: "/borrowedBooks",
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
        path: "/updateBook/:id",
        loader: ({params})=>fetch(`https://school-library-server.vercel.app/books/${params.id}`),
        element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>
      },
      {
        path: "/category/:name",
        loader: ({params})=>fetch(`https://school-library-server.vercel.app/books?category=${params.name}`),
        element: <Category></Category>
      },
      {
        path: "/bookDetails/:id",
        loader: ({params})=>fetch(`https://school-library-server.vercel.app/books/${params.id}`),
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
      },
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
