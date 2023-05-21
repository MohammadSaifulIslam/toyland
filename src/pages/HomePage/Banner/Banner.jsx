import banner1 from '../../../assets/images/banner/banner-1 (1).jpg';
import banner2 from '../../../assets/images/banner/banner-1 (2).jpg';
import banner3 from '../../../assets/images/banner/banner-1 (3).jpg';

// swiper js 
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './Banner.css';





const Banner = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={banner1} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Ignite Kid's Imagination
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    Unleash a world of wonder and imagination with our captivating collection of toys. From magical dolls to thrilling playsets, our Toyland sparks creativity and transports kids to a realm of endless possibilities.
                                </p>
                                <div className="my-btn w-fit mx-auto">
                                    Buy Now
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative'>
                        <img src={banner2} alt="" />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                Discover the Joy of Learning
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                Make learning an adventure with our educational toys that entertain and educate. From interactive puzzles to STEM kits, our Toyland cultivates a love for knowledge and empowers children to explore, discover, and grow.
                                </p>
                                <div className="my-btn w-fit mx-auto">
                                    Buy Now
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative'>
                        <img src={banner3} alt="" />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                Play, Laugh, and Create Memories
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                Create unforgettable moments of joy and laughter with our enchanting toys. From cuddly companions to interactive games, our Toyland is where cherished memories are made, fostering bonds between friends and family.
                                </p>
                                <div className="my-btn w-fit mx-auto">
                                    Buy Now
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;