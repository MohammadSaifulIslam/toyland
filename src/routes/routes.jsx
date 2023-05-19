import { createBrowserRouter } from "react-router-dom";
import Login from "../Others/Login/Login";
import Register from "../Others/Register/Register";
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
          element:<MyToyPageHome/>
        },
        {
          path: '/add-toy',
          element:<AddToyPageHome/>
        },
        {
          path: '/blog',
          element:<BlogPageHome/>
        },
        {
          path: '/toy/:id',
          element:<ToyDetailsPage/>
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