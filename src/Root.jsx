import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SighnIn/SignIn";
import App from "./App";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard";
import Private from "./Components/Private";
import About from "./Pages/About";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signIn",
            element:<SignIn></SignIn>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/dashboard",
            element:<Private><Dashboard></Dashboard></Private>
        },
        {
          path:"/about",
          element:<About></About>
        }
      ]
    },
  ]);

  export default router