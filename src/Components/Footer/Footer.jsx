import logo from '../../assets/logo.png';
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


const Footer = () => {
    return (
        <>
         <footer className="footer p-5 bg-base-200 text-base-content">
  <aside className=''>
    <img src={logo} className='w-20 h-20' alt="" />
    <p className='font-bold text-blue-500'>Longorpara F.K Public School<br/></p>
    <div className=''>
      <p className='flex items-center font-bold gap-1' ><MdOutlineEmail className='text-xl' />  Email: <span className='hover:text-blue-600 cursor-pointer'> fkpublicschool@gmail.com</span></p>
      <p className='flex items-center font-bold gap-1 pt-2' ><IoCallOutline className='text-xl' /> Contact: <span className='hover:text-blue-600 cursor-pointer'> 01724-938922</span></p>
      <p className='flex items-center font-bold gap-1 pt-2' ><CiLocationOn className='text-2xl' /> Address: <span className='hover:text-blue-600 cursor-pointer'> Longarpara Bazar,Sreebardi,Sherpur, Bangladesh</span></p>
    </div>
  </aside> 

  <nav>
    <header className="footer-title">Useful Links</header> 
    <a className="link link-hover" href='https://dshe.gov.bd/' target="_blank"  >DSHE</a>
    <a className="link link-hover" href='https://banbeis.gov.bd/' target="_blank" >BANBEIS</a>
    <a className="link link-hover" href='https://bangladesh.gov.bd/index.php' target="_blank" >BD National Portal</a>
    <a className="link link-hover" href='https://www.mymensingheducationboard.gov.bd/' target="_blank" >Mymensingh Board</a>
    
  </nav> 
  <nav >
    <header className="footer-title">.... </header> 
    
    <a className="link link-hover" href='https://www.du.ac.bd/' target='_blank'>Dhaka Univercity</a>
    <a className="link link-hover" href='https://www.sust.edu/' target='_blank' >SUST</a>
    <a className="link link-hover" href='https://mopme.gov.bd/' target='_blank' >Primary & Mass Education</a>
    <a className="link link-hover" href='https://pathshala-eims.com/' target='_blank' >Pathshala EIMS</a>
    
  </nav> 
  
  <nav>
    <header className="footer-title">...</header> 
    <a className="link link-hover">Facebook Page</a>
    
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instragram</a>
  </nav>
</footer>  

<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Developed By © <a href="https://www.facebook.com/peacecoder69" target='_blank' className='underline text-blue-400 hover:text-blue-600'>PeaceCoder Anas</a></p>
  </aside>
</footer>
        </>
    );
};

export default Footer;