import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddToyPageHome from "../pages/AddToyPage/AddToyPageHome";
import AllToyPageHome from "../pages/AllToyPage/AllToyPageHome";
import BlogPageHome from "../pages/BlogPage/BlogPageHome";
import Home from "../pages/HomePage/Home/Home";
import MyToyPageHome from "../pages/MyToyPage/MyToyPageHome";

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
      ]
    },
  ]);

export default router;