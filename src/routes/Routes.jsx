import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/Home/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/news.json')
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/news/:id",
          element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
]);

export default router;