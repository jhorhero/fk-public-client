import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Statics.css';



const Statics = () => {
    const [counterOn,setCounterOn] = useState(false)
    return (
        <div className="bg-blue-500" >
            
            <div className="py-8 z-10 max-w-7xl mx-auto">

            <h1 className="text-center  text-2xl lg:text-3xl font-semibold text-white">Statics</h1>
            <hr className="mx-auto border-1 mt-2 leading-9 w-16" />
            <hr className="mx-auto border-1 mt-1 w-10 " />
            <p data-aos="zoom-in-up" className="text-base py-3 lg:text-2xl text-white text-center">Our Organization At a Glance</p>
            
            <div className="grid text-white  my-6 gap-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

                    {/* Student Card */}
                <div className="text-black   image">
                    <div className="flex justify-center">
                    <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/student-male.png" className=" " alt="" />
                    </div>
                   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl py-2 font-extrabold text-center">{ 
                   counterOn && <CountUp duration={2} delay={0} start={0} end={500}></CountUp>
                   }</p> </ScrollTrigger> 
                  
                    <h2 className="font-bold text-center">Students</h2>
                </div>

                      {/* Teacher Card */}
      <div className="text-black  image">
      <div className="flex justify-center">
      <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/teacher.png" className=" " alt="" />
      </div>
     <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl py-2 font-extrabold text-center">{ 
     counterOn && <CountUp duration={2} delay={0} start={0} end={37}></CountUp>
     }</p> </ScrollTrigger> 
    
      <h2 className="font-bold text-center">Teacher</h2>
  </div>

      {/* Staffs Card */}
  <div className="text-black  image">
      <div className="flex justify-center">
      <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/conference-background-selected.png" className=" " alt="" />
      </div>
     <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl py-2 font-extrabold text-center">{ 
     counterOn && <CountUp duration={2} delay={0} start={0} end={2}></CountUp>
     }</p> </ScrollTrigger> 
    
      <h2 className="font-bold text-center">Staffs</h2>
  </div>


      {/* Classes */}
  <div className="text-black  image">
      <div className="flex justify-center">
      <img src="https://www.shaistaganjhighschool.edu.bd/assets/img/icon/classroom.png" className=" " alt="" />
      </div>
     <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl py-2 font-extrabold text-center">{ 
     counterOn && <CountUp duration={2} delay={0} start={0} end={13}></CountUp>
     }</p> </ScrollTrigger> 
    
      <h2 className="font-bold text-center">Classes</h2>
  </div>

                  

              
               
            </div>
    

      

            
            </div>
        </div>
    );
};

export default Statics;









 