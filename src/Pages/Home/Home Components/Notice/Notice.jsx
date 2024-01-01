import Marquee from "react-fast-marquee";
import { FaPlay } from "react-icons/fa";

const Notice = () => {
    return (
        <div className=" bg-blue-700  ">
            <div className="flex lg:mx-9 mx-2  max-w-full h-[9vh] items-center text-white">
            <h2 className="text-xl p-2 font-bold border-r-2">Notice</h2> 
            <Marquee pauseOnHover={true} speed={50} delay={5}  gradient={false}>
                <p className="text-base pl-[]] ml-6 flex items-center gap-2"> <FaPlay className="text-yellow-500"/> <span >  আপনার সোনামনির সুন্দর ভবিষ্যৎ গঠনের লক্ষ্যে লংগরপাড়া এফ.কে. পাবলিক স্কুল নিরলসভাবে কাজ করে যাচ্ছে। শুধু শিক্ষায় শিক্ষিত না, সর্বোপরি একজন মানবিক সুন্দর মানুষ হিসেবে গড়ে উঠবে যেমনটা প্রত্যেক বাবা-মার চাওয়া। ইনশাআল্লাহ!</span></p>
                {/* <p className="text-base ml-6 flex items-center gap-2"> <FaPlay className="text-yellow-500"/> <span >  পবিত্র রমাজান, স্বাধীনতা ও জাতীয় দিবস,ইস্টার সানডে,বৈসাবি,নববর্ষ,শব-ই-ক্বদর,জুমাতুল বিদা, ঈদ-উল-ফিতর উপলক্ষে পাঠদান কার্যক্রম বন্ধের নোটিশ।</span></p>
                <p className="text-base ml-6 flex items-center gap-2"> <FaPlay className="text-yellow-500"/> <span >  School Closure Notice</span></p>
                <p className="text-base ml-6 flex items-center gap-2"> <FaPlay className="text-yellow-500"/> <span >  Government directives</span></p>
                <p className="text-base ml-6 flex items-center gap-2"> <FaPlay className="text-yellow-500"/> <span >  পবিত্র রমাজান, স্বাধীনতা ও জাতীয় দিবস,ইস্টার সানডে,বৈসাবি,নববর্ষ,শব-ই-ক্বদর,জুমাতুল বিদা, ঈদ-উল-ফিতর উপলক্ষে পাঠদান কার্যক্রম বন্ধের নোটিশ।</span></p>
                <p className="text-base ml-6 flex items-center gap-2"> <FaPlay className="text-yellow-500"/> <span >  শ্রী শ্রী শিবরাত্রী ব্রত এবং শব-ই মিরাজ উপলক্ষে বিদ্যালয় বন্ধের নোটিশ</span></p>
                <p className="text-base ml-6 flex items-center gap-2"> <FaPlay className="text-yellow-500"/> <span >  করোনা ভাইরাসজনিত রোগ এর বর্তমান পরিস্থিতিতে মাননীয় প্রধানমন্ত্রীর ৩১ দফা নির্দেশনা
Notice 26 Jun</span></p> */}
            </Marquee>
            </div>
        </div>
    );
};

export default Notice;