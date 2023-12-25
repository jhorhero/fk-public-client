import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import OurTeacher from "../Pages/Our Teacher/OurTeacher";
import TeacherInfo from "../Pages/Our Teacher/TeacherInfo";
import Admisions from "../Pages/Admission/Admisions";



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
        {
            path: "/our-teacher",
            element: <OurTeacher/>,
        },
        {
            path: "/admission",
            element: <Admisions/>,
        },
        {
            path: "/teacher-info",
            element: <TeacherInfo/>,
        },
      ]
    },
  ]);

