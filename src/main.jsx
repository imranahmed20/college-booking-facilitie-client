import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Error from './page/Error';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import Register from './page/Resgister/Register';
import CollageDetail from './page/CollageDetail/CollageDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/collage/:id',
        element: <CollageDetail></CollageDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/collage/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
