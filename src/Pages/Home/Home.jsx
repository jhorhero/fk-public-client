import { Helmet } from "react-helmet-async";
import Banner from "./Home Components/Banner/Banner";
import Notice from "./Home Components/Notice/Notice";

const Home = () => {
    return (
        <div className="">
               <Helmet>
        <title>FK Public School | Home</title>
            </Helmet>
            <Notice/>
            <div className="max-w-screen-2xl mx-auto">
            <Banner />
            </div>
        </div>
    );
};

export default Home;