import { Outlet } from "react-router-dom";
import Nevbar from "../Components/Nevbar/Nevbar.";
import Footer from "../Components/Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Nevbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayouts;