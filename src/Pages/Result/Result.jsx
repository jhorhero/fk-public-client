import { Helmet } from "react-helmet-async";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Result = () => {
    return (
        <>
        <Helmet>
        <title>Result</title>
            </Helmet>
            
        <div className=" max-w-7xl py-5 mx-auto flex items-center  flex-col ">
 
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-100">
      <form className="card-body">
        <div className="form-control">
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-blue-500">EXAM & SESSION *</span>
  
  </div>
  <select className="select select-bordered">
    <option disabled selected>Select one</option>
    <option>Annual Exam -2024</option>
    <option>Half Yearly -2024</option>
    <option>Test Exam</option>
    <option>Pre Test - 2024</option>
    <option>Model Test - 2024</option>
  </select>
</label>
        </div>


        <div className="form-control">
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-blue-500">SECTION</span>
  
  </div>
  <select className="select select-bordered">
    <option disabled selected>Select one</option>
    <option>SECTION -A </option>
    <option>SECTION -B </option>
    <option>SECTION -C </option>
    <option>SECTION -D </option>
  
  </select>
</label>
        </div>
        <div className="form-control">
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-blue-500">GROUP</span>
  
  </div>
  <select className="select select-bordered">
    <option disabled selected>Select one</option>
    <option>Science </option>
    <option>Humanities </option>
    <option>Business Studies </option>
    
  
  </select>
</label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-500">Roll Number</span>
          </label>
          <input type="number" placeholder="Roll" className="input input-bordered" required />
        </div>
       
        <div className="form-control mt-6">
          <button className=" py-3 px-6 flex items-center justify-center bg-blue-600 hover:text-white gap-2  ml-1 font-bold text-black rounded-xl"> <IoSearch className="text-xl" /> Search</button>
        </div>
      </form>
    </div>
        
        
        
       

  
</div>
        </>
   
    );
};

export default Result;