// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";


const Navlinkss = () => {
    return (
        <>
            <NavLink
  to="/"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>
  Messages
</NavLink>
            <li><a>Item 3</a></li>
        </>
    );
};

export default Navlinkss;