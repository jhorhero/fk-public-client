// import { Link } from "react-router-dom";

import {  NavLink } from "react-router-dom";
import './Naplink.css'

const Navlinkss = () => {
    return (
        <>
        <NavLink
to="/"
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 px-6 bg-blue-600 font-bold text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white font-bold ml-1 text-black rounded-xl"
}
>
Home
</NavLink>

        <NavLink
to="/about"
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
About Us
</NavLink>
        <NavLink
to="/our-teacher"
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6  ml-1 font-bold text-black rounded-xl"
}
>
Our Teacher
</NavLink>


     <li>   <NavLink
              to="/admission"
              className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6  ml-1 font-bold text-black rounded-xl"
}
>
Admission
</NavLink></li> 
        </>
    );
};



export default Navlinkss;

 









// <NavLink style={({ isActive }) =>
//                         isActive
//                             ? {
                              
//                             }
//                             : {}}  ><li ><a href="/">Home</a></li> </NavLink> 