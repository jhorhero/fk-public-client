import gallery1 from '../../../../assets/Gallery/gallery (1).jpg';
import gallery2 from '../../../../assets/Gallery/gallery (2).jpg';
import gallery3 from '../../../../assets/Gallery/gallery (3).jpg';
import gallery4 from '../../../../assets/Gallery/gallery (4).jpg';
import gallery5 from '../../../../assets/Gallery/gallery (5).jpg';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className="max-w-screen-xl p-2  mx-auto">
            <h1 className="py-6 text-xl lg:text-3xl font-bold">Gallery  </h1>
            <hr className="h-1 mb-2 bg-yellow-500" />    
            <div className='pb-10  mb-10 gap-5 overflow-hidden lg:columns-3 columns-1 space-y-5'>
                <img data-aos="fade-up-right"  src={gallery1} alt="" />
                <img data-aos="fade-up-right"   src={gallery2} alt="" />
                <img data-aos="fade-up"  src={gallery3} alt="" />
                <img data-aos="fade-up-left"   src={gallery4} alt="" />
                <img data-aos="fade-up-left"  src={gallery5} alt="" />

                
                </div>        
        </div>
    );
};

export default Gallery;