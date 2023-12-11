import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
      ]
    },
  ]);

