// import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
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
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
Our Teacher
</NavLink>

        <NavLink
to="/admission"
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
Admission
</NavLink>
        <NavLink
to="/result"
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
Result
</NavLink>

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="py-3 px-6 flex items-center hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl">Others<IoIosArrowDown className="ml-1 font-extrabold text-base" /></div>
  <ul tabIndex={0} className="dropdown-content z-[2]  menu p-2 shadow bg-base-100 rounded-box w-52">
 
  <NavLink
to='/library'
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
Why Study?
</NavLink>

  <NavLink
to='/playground'
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
How to Apply?
</NavLink>

<NavLink
to='/playground'
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
PlayGround
</NavLink>

<NavLink
to='/library'
className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "py-3 font-bold px-6 bg-blue-600 text-white ml-1 rounded-xl" : "py-3 px-6 hover:bg-blue-600 hover:text-white  ml-1 font-bold text-black rounded-xl"
}
>
Library
</NavLink>
    
  </ul>
</div>








     
      
   




   
        </>
    );
};



export default Navlinkss;

 









// <NavLink style={({ isActive }) =>
//                         isActive
//                             ? {
                              
//                             }
//                             : {}}  ><li ><a href="/">Home</a></li> </NavLink> 