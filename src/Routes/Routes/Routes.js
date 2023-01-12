import { createBrowserRouter } from "react-router-dom";
import BikeDetails from "../../Component/BikeDetails.js/BikeDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct";
import Booking from "../../Pages/Dashboard/Booking";
import ManageBikes from "../../Pages/Dashboard/ManageBikes";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import Profile from "../../Pages/Shared/Profile";
import Welcome from "../../Pages/Shared/Welcome";
import CategoryByBike from "../../Pages/Shop/Categoreis/CategoryByBike";
import Shop from "../../Pages/Shop/Shop";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoutes";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/bike-details/:id',
        element: <BikeDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/bike/${params._id}`)

      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/bike-category/:category',
        element: <PrivateRoute><CategoryByBike></CategoryByBike>,</PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/bike/${params.category}`)
      },
    ]


  },
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>

    ),
    children: [
      {
        path: '',
        element: (
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-product',
        element: (
          <PrivateRoute><AddProduct /></PrivateRoute>
        ),
      },
      {
        path: 'manage-product',
        element: (

          <PrivateRoute>
            <ManageBikes />
          </PrivateRoute>


        ),
      },
      {
        path: 'my-bookings',
        element:<PrivateRoute>
           <Booking />
        </PrivateRoute>
      }
    ]
  }
])