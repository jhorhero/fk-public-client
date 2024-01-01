import { FaBookAtlas, FaBookBible, FaBookBookmark, FaBookJournalWhills, FaGraduationCap } from "react-icons/fa6";
import { FaBook, FaBookDead, FaBookOpen, FaGlobe, FaHome } from "react-icons/fa";
import './Cards.css'


const Card = () => {
    return (
        <div className="max-w-7xl  mx-auto my-16">
            <div className="grid grid-cols-1  p-4   md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            
            <div className="cccc w-72 lg:w-full  mx-auto hover:bg-blue-700 bg-green-100 hover:text-white">
  <figure className="px-10 flex justify-center pt-10">
  <FaGraduationCap className="text-7xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-mono">Skilled Instructors</h2>
    <p className=" text-base">Our dedicated instructors contribute a diverse range of expertise, ensuring each student benefits from an exceptional learning encounter.</p>
    
  </div>
</div>


            <div className="cccc w-72  lg:w-full mx-auto hover:bg-blue-700 bg-green-100 hover:text-white">
  <figure className="px-10 flex justify-center pt-10">
  <FaGlobe className="text-7xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-mono">Online Classes</h2>
    <p className=" text-base">Our school has seamlessly integrated online classes, providing students with a flexible and dynamic virtual learning environment.</p>
    
  </div>
</div>
            
            
            <div className="cccc w-72  lg:w-full mx-auto hover:bg-blue-700 bg-green-100 hover:text-white">
  <figure className="px-10 flex justify-center pt-10">
  <FaHome className="text-7xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-mono">Home Projects</h2>
    <p className=" text-base">Engaging in home projects, students actively apply their learning, fostering practical skills and a deeper understanding of the curriculum.</p>
    
  </div>
</div>
            <div className="cccc w-72  lg:w-full mx-auto hover:bg-blue-700 bg-green-100 hover:text-white">
  <figure className="px-10 flex justify-center pt-10">
  <FaBookOpen className="text-7xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-mono">Book Library</h2>
    <p className=" text-base">Our well-stocked book library provides a diverse collection that caters to varied interests and academic needs.</p>
    
  </div>
</div>
            
  
           

           
          
            


            </div>
            
        </div>
    );
};

export default Card;