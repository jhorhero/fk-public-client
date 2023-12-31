import { useState } from "react";
import './Student.css'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const StudentStatics = () => {
    const [counterOn,setCounterOn] = useState(false)
    return (
        <div className="bg-blue-600" >
            
            <div className="py-8 z-10 max-w-7xl mx-auto">

           
           <h1 className="text-center  text-2xl lg:text-3xl font-semibold text-white">Student Statistics</h1>
            <hr className="mx-auto border-1 mt-2 leading-9 w-16" />
            <hr className="mx-auto border-1 mt-1 w-10 " />
            <p data-aos="zoom-in-up" className="text-base py-3 lg:text-2xl text-white text-center">Class wise Students</p>
           
            
            <div className="grid w-[70vw] mx-auto  p-2 gap-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

                    {/* Play Card */}
                <div className="text-white  py-9 w-32 h-32  bg-red-600 rounded-full image">
                   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl font-extrabold text-center">{ 
                   counterOn && <CountUp duration={2} delay={0} start={0} end={500}></CountUp>
                   }</p> </ScrollTrigger> 
                  
                    <h2 className="font-bold text-center">Play</h2>
                </div>
                   
                       {/* Nursery Card */}
                <div className="text-white  py-9 w-32 h-32  bg-red-600 rounded-full image">
                   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl font-extrabold text-center">{ 
                   counterOn && <CountUp duration={2} delay={0} start={0} end={20}></CountUp>
                   }</p> </ScrollTrigger> 
                  
                    <h2 className="font-bold text-center">Nursery</h2>
                </div>
                
                    {/* One Card */}
                <div className="text-white  py-9 w-32 h-32  bg-red-600 rounded-full image">
                   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl font-extrabold text-center">{ 
                   counterOn && <CountUp duration={2} delay={0} start={0} end={57}></CountUp>
                   }</p> </ScrollTrigger> 
                  
                    <h2 className="font-bold text-center">One</h2>
                </div>
                
                    {/* Two Card */}
                <div className="text-white  py-9 w-32 h-32  bg-red-600 rounded-full image">
                   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl font-extrabold text-center">{ 
                   counterOn && <CountUp duration={2} delay={0} start={0} end={500}></CountUp>
                   }</p> </ScrollTrigger> 
                  
                    <h2 className="font-bold text-center">Two</h2>
                </div>
                
                    {/* Three Card */}
                <div className="text-white  py-9 w-32 h-32  bg-red-600 rounded-full image">
                   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >  <p className="text-4xl font-extrabold text-center">{ 
                   counterOn && <CountUp duration={2} delay={0} start={0} end={500}></CountUp>
                   }</p> </ScrollTrigger> 
                  
                    <h2 className="font-bold text-center">Three</h2>
                </div>
                    
                
                
                


                  

              
               
            </div>
    

      

            
            </div>
        </div>
    );
};

export default StudentStatics;