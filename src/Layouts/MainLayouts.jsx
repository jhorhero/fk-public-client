import { Outlet } from "react-router-dom";
import Nevbar from "../Components/Nevbar/Nevbar.";


const MainLayouts = () => {
    return (
        <div>
            <Nevbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;