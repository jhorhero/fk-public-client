import { Helmet } from "react-helmet-async";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const TeacherInfo = () => {
    return (
        <>
         <Helmet>
        <title>Name</title>
            </Helmet>
            <div className="bg-green-100">
                <h1 className="text-center text-2xl font-bold p-6">Teacher Info</h1>
                <div className="flex items-center justify-center p-6 gap-2">
               <Link to='/'> <p className="flex  items-center gap-1">Home <IoIosArrowForward className=""/> </p> </Link>

               <Link to='/our-teacher'> <p className="flex  items-center gap-1">Our Teacher <IoIosArrowForward className=""/> </p> </Link>

               <Link to='/teacher-info'><button className="py-1 px-3 rounded bg-blue-600 text-white">Teacher Info</button></Link>
               
                </div>
             </div>

            <div className="max-w-7xl p-6  mx-auto w-full sm:flex lg:flex lg:flex-row md:flex-col sm:flex-col ">
                <div data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="flex mb-4  flex-col gap-2 items-center w-full lg:w-1/3">
                    <img src="https://storage.googleapis.com/example-images/129421/teacher/1.jpeg" alt=""  className="w-52 h-52 rounded-md" />
                    <h6
      className="block  font-sans text-blue-600 antialiased font-bold leading-relaxed tracking-normal uppercase">
      MD. HARUNUR RASID TALUKDER
    </h6>
    <h4 className="block  font-sans  antialiased font-bold leading-snug text-xl tracking-normal text-blue-gray-900">
      Headmaster
    </h4>
                </div>
                {/* Deatails  */}
                <div data-aos="fade-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="flex  flex-col w-full lg:w-1/2">
                       
                        
                        
                        
                        
                        
                        
                        
                        
                        <h3><span className="text-black font-bold mb-6 mr-2">Joining Date   :  </span> <span className="ml-2 "> 1 Feb, 1996</span></h3>
                        <hr  className="h-px my-2 bg-gray-200  dark:bg-gray-200 " />
                        <h3 className=""><span className="text-black font-bold mb-6 mr-2">Father's Name :</span> <span className="ml-2 ">MD. ABDUL MUSABBIR TALUKDER</span> </h3>
                        <hr  className="h-px my-2 bg-gray-200  dark:bg-gray-200 " />
                        <h3><span className="text-black font-bold mb-6 mr-2">Mother's Name :</span> <span className="ml-2">MST. AKITUN NESA</span></h3>
                        <hr  className="h-px my-2 bg-gray-200  dark:bg-gray-200 " />
                        
                </div>
            </div>
        </>
    );
};

export default TeacherInfo;