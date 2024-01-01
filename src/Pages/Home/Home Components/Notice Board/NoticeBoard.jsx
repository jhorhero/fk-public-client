import { PiChalkboardSimple } from "react-icons/pi";
import { showCurrentDate } from "../../../../utils/getCurrentDate";
import { IoMdNotifications } from "react-icons/io";


const NoticeBoard = () => {
  const currentDate = showCurrentDate()
    return (
        <div className="max-w-screen-2xl lg:flex  justify-center  mx-auto h-">
          
          <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="border-2 h-[] m-2  lg:w-[40%]">
            <div className="bg-blue-600 flex items-center justify-between">
            <h1 className="text-center p-2 text-xl flex gap-2 items-center text-white font-bold "> <PiChalkboardSimple className="lg:text-xl text-xs text-center" /> Notice Board</h1>
            <p className="text-white lg:text-xl text-xs pr-2">{currentDate}</p>
            </div>
            
            <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="container p-5">
              <div className="border-l-2 border-blue-600 p-5">
              <h1 className="hover:text-blue-500  text-gray-400     ">Government directives</h1>
              <p className="text-blue-500">22 December 2023</p>
              </div>
            </div>
            <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="container p-5">
              <div className="border-l-2 border-blue-600 p-5">
              <h1 className="hover:text-blue-500  text-gray-400     ">পবিত্র রমাজান, স্বাধীনতা ও জাতীয় দিবস,ইস্টার সানডে,বৈসাবি,নববর্ষ,শব-ই-ক্বদর,জুমাতুল বিদা, ঈদ-উল-ফিতর উপলক্ষে পাঠদান কার্যক্রম…</h1>
              <p className="text-blue-500">22 December 2023</p>
              </div>
            </div>
            <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="container p-5">
              <div className="border-l-2 border-blue-600 p-5">
              <h1 className="hover:text-blue-500  text-gray-400     ">School Closure Notice</h1>
              <p className="text-blue-500">22 December 2023</p>
              </div>
            </div>

            
            
           <div className=" ">
           <div className="flex items-center justify-between p-3 bg-blue-500">
              <h1 className="font-bold text-white">More</h1>
              <h1 className="font-bold text-white"></h1>
            </div>
           </div>
            </div>  
          <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="border-2 h-[] m-2  lg:w-[40%]">
            <div className="bg-blue-600 flex items-center justify-between">
            <h1 className="text-center p-2 text-xl flex gap-2 items-center text-white font-bold "> <IoMdNotifications className="lg:text-3xl text-xs text-center" /> Events </h1>
            

            
            </div>
            
            <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="container p-5">
              <div className="border-l-2 border-blue-600 p-5">
              <h1 className="hover:text-blue-500  text-gray-400     ">Government directives</h1>
              <p className="text-blue-500">22 December 2023</p>
              </div>
            </div>
            <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="container p-5">
              <div className="border-l-2 border-blue-600 p-5">
              <h1 className="hover:text-blue-500  text-gray-400     ">পবিত্র রমাজান, স্বাধীনতা ও জাতীয় দিবস,ইস্টার সানডে,বৈসাবি,নববর্ষ,শব-ই-ক্বদর,জুমাতুল বিদা, ঈদ-উল-ফিতর উপলক্ষে পাঠদান কার্যক্রম…</h1>
              <p className="text-blue-500">22 December 2023</p>
              </div>
            </div>
            <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="container p-5">
              <div className="border-l-2 border-blue-600 p-5">
              <h1 className="hover:text-blue-500  text-gray-400     ">School Closure Notice</h1>
              <p className="text-blue-500">22 December 2023</p>
              </div>
            </div>

            
            
           <div className=" ">
           <div className="flex items-center justify-between p-3 bg-blue-500">
              <h1 className="font-bold text-white">More</h1>
              <h1 className="font-bold text-white"></h1>
            </div>
           </div>
            </div>  
           
          
        </div>
    );
};

export default NoticeBoard;