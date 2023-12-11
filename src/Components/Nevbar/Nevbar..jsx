import logo from '../../assets/logo.png';
import Navlinkss from './Navlinks';


const Nevbar = () => {
    return (
        <>
        <div className='flex items-center justify-center'>
            <div>
                <img width={100} className='' src={logo} alt="" />
            </div>
            <div>
                <p>ESTD:2013</p>
                <h1 className='font-bold text-blue-500'>FK Public School </h1>
                <p>Longorpara,Sherpur</p>
            </div>
        </div>
            <div className="navbar bg-base-200 shadow-lg">

  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Navlinkss/>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>



  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Navlinkss/>
    </ul>
  </div>



  <div className="navbar-end">
    
  </div>
</div>
        </>
    );
};

export default Nevbar;