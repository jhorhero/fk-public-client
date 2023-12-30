import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const About = () => {
    return (
        <>
          <Helmet>
        <title>About</title>
            </Helmet>
             <div className="bg-green-100">
                <h1 className="text-center text-2xl font-bold p-6">About Us</h1>
                <div className="flex items-center justify-center p-6 gap-2">
               <Link to='/'> <p className="flex  items-center gap-1">Home <IoIosArrowForward className=""/> </p> </Link>

               <Link to='/about'><button className="py-1 px-3 rounded bg-blue-600 text-white">About Us</button></Link>
               
                </div>
             </div>
             <div className="max-w-7xl mx-auto  p-9 m-6">
                    <p>We teach student using advanced learning materials and ensure a congenial learning materials and ensure a congenial environment for connective Practice, regular test, systematic and most importantly science based activities in the classrooms targeting Academic calendar published for each year under the guidance of Minstry of Education, Sylhet Education Board. As a result this institution has been establishing its superiority both in curricular and co-curricular activities.</p>
<br/>
<p>This institution has been able to acquire appraisal in the field of inter school & college debate, cultural competition, essay competition and education co-curricular activities. 
With the combining effects of students, teachers, guidance and most importantly for the skilled management of the Governing Body.</p>
<br />
<p>
We are determined to shape it as the best educational institution of Mymensingh as well as  Bangladesh Maintaining consistency in the acquired  result and reputation. Our only expectation is to get the cordial co-operation of all to administer the institution and improve the standard of education.
</p>

             </div>
        </>
    );
};

export default About;