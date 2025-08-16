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
import ContactUs from './Components/ContactUs.jsx';
import HowItWorks from './Components/HowItWorks.jsx';



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
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/howItWorks",
        element: <HowItWorks></HowItWorks>
      },
      {
        path: "/updateBook/:id",
        element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>
      },
      {
        path: "/category/:name",
        loader: ({params})=>fetch(`http://localhost:3000/books/category/${params.name}`),
        element: <Category></Category>
      },
      {
        path: "/bookDetails/:id",
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
