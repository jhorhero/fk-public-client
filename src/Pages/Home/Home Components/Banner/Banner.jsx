
import banner from '../../../../assets/banner.jpg';
import banner0 from '../../../../assets/banner1.jpg';
import banner1 from '../../../../assets/traveling.jpg';
import banner2 from '../../../../assets/banner2.png';
import banner3 from '../../../../assets/banner3.png';
import banner4 from '../../../../assets/banner4.jpg';
import banner5 from '../../../../assets/banner2023.png';
import banner6 from '../../../../assets/banner6.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <>
             <Swiper  navigation={true} modules={[Autoplay,Navigation]} autoplay={{delay: 5000}} className="mySwiper">
        <SwiperSlide><img  src={banner5} className='w-full h-[65vh] rounded-md   ' alt="" /></SwiperSlide>
        <SwiperSlide><img  src={banner6} className='w-full h-[65vh] rounded-md  ' alt="" /></SwiperSlide>
        <SwiperSlide><img  src={banner} className='w-full h-[65vh] rounded-md  ' alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} className='w-full h-[65vh] rounded-md  '  alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner0} className='w-full h-[65vh] rounded-md  '  alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} className='w-full h-[65vh] rounded-md  '  alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} className='w-full h-[65vh] rounded-md  '  alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} className='w-full h-[60vh] rounded-md  '  alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner4} className='w-full h-[60vh] rounded-md  '  alt="" /></SwiperSlide>
      </Swiper>   
        </>
    );
};

export default Banner;