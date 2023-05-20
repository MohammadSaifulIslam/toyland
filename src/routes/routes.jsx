import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Others/ErrorPage/ErrorPage";
import Login from "../Others/Login/Login";
import Register from "../Others/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Main from "../layouts/Main";
import AddToyPageHome from "../pages/AddToyPage/AddToyPageHome";
import AllToyPageHome from "../pages/AllToyPage/AllToyPageHome";
import BlogPageHome from "../pages/BlogPage/BlogPageHome";
import Home from "../pages/HomePage/Home/Home";
import MyToyPageHome from "../pages/MyToyPage/MyToyPageHome";
import ToyDetailsPage from "../pages/ToyDetailsPage/ToyDetailsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/all-toy',
          element:<AllToyPageHome/>
        },
        {
          path: '/my-toy',
          element:<PrivateRoutes><MyToyPageHome/></PrivateRoutes>
        },
        {
          path: '/add-toy',
          element:<PrivateRoutes><AddToyPageHome/></PrivateRoutes>
        },
        {
          path: '/blog',
          element:<BlogPageHome/>
        },
        {
          path: '/toy/:id',
          element:<PrivateRoutes><ToyDetailsPage/></PrivateRoutes>
        },
        {
          path: '/login',
          element:<Login/>
        },
        {
          path: '/register',
          element:<Register/>
        },
      ]
    },
  ]);

export default router;