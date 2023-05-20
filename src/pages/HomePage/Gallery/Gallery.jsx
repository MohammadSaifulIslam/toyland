import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
    AOS.init();
    return (
        <section className="my-container mt-20 overflow-hidden">
            <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                <h3 className="text-3xl font-bold mb-5">Our Gallery</h3>
                <p className="font-medium">Enchanting Moments Captured in Play. Immerse yourself in a delightful gallery showcasing the magic of playtime.</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="col grid gap-5">
                    <div data-aos="fade-right" className='overflow-hidden'>
                        <img src="https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9332.jpg?size=626&ext=jpg&ga=GA1.2.562300066.1684249269&semt=ais" alt=""
                            className="hover:scale-125 duration-700 h-full w-full object-cover"
                        />
                    </div>
                    <div data-aos="fade-right" className='overflow-hidden'>
                        <img src="https://img.freepik.com/free-photo/happy-children-sitting-together-close-smile_1157-38613.jpg?size=626&ext=jpg&ga=GA1.2.562300066.1684249269&semt=ais" alt=""
                            className="hover:scale-125 duration-700 h-full w-full object-cover" />
                    </div>
                </div>
                <div className="col grid gap-5">
                    <div data-aos="fade-up" className='overflow-hidden'>
                        <img src="https://img.freepik.com/free-photo/little-girl-reading-book-with-her-teddy-bears_329181-9409.jpg?size=626&ext=jpg&ga=GA1.2.562300066.1684249269&semt=ais" alt=""
                            className="hover:scale-125 duration-700 h-full w-full object-cover" />
                    </div>
                    <div data-aos="fade-up" className='overflow-hidden'>
                        <img src="https://img.freepik.com/free-photo/front-view-girl-playing-home_23-2150286176.jpg?size=626&ext=jpg&ga=GA1.2.562300066.1684249269&semt=ais" alt=""
                            className="hover:scale-125 duration-700 h-full w-full object-cover" />
                    </div>
                </div>
                <div className="col grid gap-5">
                    <div data-aos="fade-left" className='overflow-hidden'>
                        <img src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382746.jpg?size=626&ext=jpg&ga=GA1.2.562300066.1684249269&semt=ais" alt="" className="hover:scale-125 duration-700 h-full w-full object-cover" />
                    </div>
                    <div data-aos="fade-left" className='overflow-hidden'>
                        <img src="https://img.freepik.com/free-photo/child-pink-clothes-his-friendly-toy_23-2148597939.jpg?size=626&ext=jpg&ga=GA1.1.562300066.1684249269&semt=ais" alt=""
                            className="hover:scale-125 duration-700 h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;