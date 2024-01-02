import { FaBook } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Library = () => {
    return (
        <div className="bg-gray-100 h-[15rem] flex items-center justify-center">
 
        <Helmet>
               <title>Playground</title>
                   </Helmet>
       
         <div className="bg-white max-w-md p-6 rounded-md shadow-md">
           <div className="flex items-start">
             <div className="mr-4">
               {/* <!-- Use appropriate icon for your notice, I'm using an exclamation mark for demonstration purposes --> */}
               <FaBook className="w-6 h-6"/>
             </div>
             <div>
               <p className="text-sm text-gray-600">We have a big Library. Arount 100 students can study at a time.</p>
             </div>
           </div>
         </div>
       
       </div>
    );
};

export default Library;