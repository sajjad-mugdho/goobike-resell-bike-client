import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";

import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import Profile from "../../Pages/Shared/Profile";
import Welcome from "../../Pages/Shared/Welcome";
import PrivateRoute from "./PrivateRoute";


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
                  <PrivateRoute>
                    <AddProduct />
                  </PrivateRoute>
                ),
              },
            //   {
            //     path: 'manage-homes',
            //     element: (
            //       <HostRoute>
            //         <ManageHomes />
            //       </HostRoute>
            //     ),
            //   },
        ]
    }
])