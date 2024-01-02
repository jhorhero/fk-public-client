import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import OurTeacher from "../Pages/Our Teacher/OurTeacher";
import TeacherInfo from "../Pages/Our Teacher/TeacherInfo";
import Admisions from "../Pages/Admission/Admisions";
import Result from "../Pages/Result/Result";
import WhyStudy from "../Pages/Others/WhyStudy/WhyStudy";
import Play from "../Pages/PlayGround/Play";
import Library from "../Pages/Libaray/Library";



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
            path: "/result",
            element: <Result/>,
        },
        {
            path: "/admission",
            element: <Admisions/>,
        },
        {
            path: "/teacher-info",
            element: <TeacherInfo/>,
        },
        {
            path: "/why",
            element: <WhyStudy/>,
        },
        {
            path: "/playground",
            element: <Play/>,
        },
        {
            path: "/library",
            element: <Library/>,
        },
      ]
    },
  ]);

