// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { useEffect, useState } from 'react';
import { FreeMode } from 'swiper';

const FlashSale = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://toyland-server.vercel.app/all-toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    console.log({ toys })
    return (
        <section className='py-20'>
            <div className="my-container">
                <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                    <h3 className="text-3xl font-bold mb-5">Flash Sale</h3>
                    <p className="font-medium">Enchanting Moments Captured in Play. Immerse yourself in a delightful gallery showcasing the magic of playtime.</p>
                </div>
                <div>
                    <Swiper
                        breakpoints={{
                            576: {
                                // width: 576,
                                slidesPerView: 2,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 3,
                            },
                            992: {
                                // width: 768,
                                slidesPerView: 4,
                            }
                        }}
                        spaceBetween={30}
                        freeMode={true}

                        modules={[FreeMode,]}
                        className="mySwiper"
                    >
                        {
                            toys.slice(5, 10).map(toy => <SwiperSlide key={toy._id}>
                                <div>
                                    <figure className='relative'>
                                        <img src={toy.pictureURL} alt="toy image" />
                                        <div className='absolute py-2 px-5  top-0 right-0 bg-[#12aee0]'><p className='text-sm font-medium text-white'>${toy.price} 30% Off</p></div>
                                    </figure>
                                        <h2 className='font-semibold text-xl '>{toy.name}</h2>
                                      
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FlashSale;