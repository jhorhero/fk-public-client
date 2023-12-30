import logo from '../../assets/logo.png';
import Navlinkss from './Navlinks';


const Nevbar = () => {
    return (
        <>
        

        <div className='flex items-center justify-around'>
    
          
          
          {/* Logo */}
        <div className='flex items-center justify-center'>
            <div>
                <img  className='w-32' src={logo} alt="" />
            </div>
            <div>
                <p>ESTD: 2013</p>
                <h1 className='font-bold text-blue-500'>Longorpara F.K Public School </h1>
                <p>Longorpara,Sherpur</p>
            </div>
        </div>
    
        </div>
            <div className="navbar   bg-gray-200  shadow-lg">

  <div className="navbar-start">
             {/* DropDown */}
             <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> 
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
        <Navlinkss/>
      </ul>
    </div>
      
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}

  </div>



  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Navlinkss/>
    </ul>
  </div>



  <div className="navbar-end">
     {/* <a className="btn btn-ghost text-xl lg:hidden" >Longorpara F.K Public School</a> */}
  </div>
</div>
        </>
    );
};

export default Nevbar;