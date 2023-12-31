import { Helmet } from "react-helmet-async";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import arif from '../../assets/arif.jpg';
import monmon from '../../assets/munmonSir.jpg';

const OurTeacher = () => {
    return (
        <>
              <Helmet>
        <title>Our Teachers</title>
            </Helmet>
             <div className="bg-green-100">
                <h1 className="text-center text-2xl font-bold p-6">Our Teacher</h1>
                <div className="flex items-center justify-center p-6 gap-2">
               <Link to='/'> <p className="flex  items-center gap-1">Home <IoIosArrowForward className=""/> </p> </Link>

               <Link to='/our-teacher'><button className="py-1 px-3 rounded bg-blue-600 text-white">Our Teachers</button></Link>
               
                </div>
             </div>
             <div className="max-w-screen-2xl mx-auto p-6 lg:p-4 grid gap-3 grid-cols-1 lg:grid-cols-4">

                {/* card  */}
              <Link to='/teacher-info'>
              <div className="relative mx-4 flex items-center rounded-xl bg-white text-gray-700  w-full max-w-[24rem] hover:border-l-4 hover:border-l-blue-600 border border-gray-300 h-32 flex-row">
  <div
    className="relative p-4  m-0 overflow-hidden  text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={monmon}
      alt="card-image" className=" w-20 mx-auto h-20" />
  </div>

  <div className="">
    <h6
      className="block text-sm font-sans text-blue-600 antialiased font-bold leading-relaxed tracking-normal uppercase">
      Tanzil Hassin
    </h6>
    <h4 className="block text-xs  font-sans  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Headmaster
    </h4>
    <p className="block  font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
     Contact: 013030023256
    </p>
  </div>
</div>  
              </Link>


              <Link to='/teacher-info'>
              <div className="relative mx-4 flex items-center rounded-xl bg-white text-gray-700  w-full max-w-[24rem] hover:border-l-4 hover:border-l-blue-600 border border-gray-300 h-32 flex-row">
  <div
    className="relative p-4  m-0 overflow-hidden  text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={arif}
      alt="card-image" className=" w-20 mx-auto h-20" />
  </div>

  <div className="">
    <h6
      className="block text-sm font-sans text-blue-600 antialiased font-bold leading-relaxed tracking-normal uppercase">
      Arif Hasan
    </h6>
    <h4 className="block text-xs  font-sans  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Assistant Teacher
    </h4>
    <p className="block  font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
     Contact: 013030023256
    </p>
  </div>
</div>  
              </Link>
     
     
     
     
     
     
     
     
     
       
  
      

             </div>
        </>
    );
};

export default OurTeacher;