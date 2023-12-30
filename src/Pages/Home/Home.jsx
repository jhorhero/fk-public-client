import { Helmet } from "react-helmet-async";
import Banner from "./Home Components/Banner/Banner";
import Notice from "./Home Components/Notice/Notice";
import Statics from "./Home Components/Staticss/Statics";
import OurTeacher from "./Home Components/OurTeacher/OurTeacher";

const Home = () => {
    return (
        <div className="">
               <Helmet>
        <title>FK Public School | Home</title>
            </Helmet>
            <Notice/>
            <div className="container mx-auto ">
            <Banner />
            
            </div>
            <OurTeacher/>
            <Statics/>
        </div>
    );
};

export default Home;