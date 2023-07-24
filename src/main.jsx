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
import PrivetRouter from './Router/PrivetRouter';
import AllCollages from './page/AllCollages/AllCollages';
import Admission from './page/Admition/Admission';
import AdmissionForm from './page/AdmissionForm/AdmissionForm';
import MyCollage from './page/MyCollage/MyCollage';
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
        path: '/allCollage',
        element: <AllCollages></AllCollages>
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/myCollage',
        element: <PrivetRouter><MyCollage></MyCollage></PrivetRouter>
      },
      {
        path: '/collage/:id',
        element: <PrivetRouter><CollageDetail></CollageDetail></PrivetRouter>,
        loader: ({ params }) => fetch(`https://collage-booking-server-ecru.vercel.app/collage/${params.id}`)
      },
      {
        path: '/name/:id',
        element: <PrivetRouter><AdmissionForm></AdmissionForm></PrivetRouter>,
        loader: ({ params }) => fetch(`https://collage-booking-server-ecru.vercel.app/name/${params.id}`)
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
