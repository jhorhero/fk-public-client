import { Helmet } from "react-helmet-async";
import Banner from "./Home Components/Banner/Banner";
import Notice from "./Home Components/Notice/Notice";
import Statics from "./Home Components/Staticss/Statics";
import OurTeacher from "./Home Components/OurTeacher/OurTeacher";
import StudentStatics from "./Home Components/Students Staticss/StudentStatics";
import NoticeBoard from "./Home Components/Notice Board/NoticeBoard";

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
            < NoticeBoard />
            <StudentStatics/>
        </div>
    );
};

export default Home;