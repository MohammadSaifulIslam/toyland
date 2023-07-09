import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { StarIcon } from "@heroicons/react/24/solid";
import Rating from "react-rating";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import './ClientReview.css';
const ClientReview = () => {

    const clientReviews = [
        {
            name: "Moin Ali",
            review: "My kids absolutely love the toys from Toyland! The quality is top-notch, and the range of options is impressive. They spend hours engaged in imaginative play. Highly recommended!",
            rating: 5,
            customerImage: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Daud Kim",
            review: "Toyland is our go-to for all things toys. Their customer service is excellent, and the toys are always a hit with my children. It's a trusted brand that consistently delivers great products.",
            rating: 4.5,
            customerImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Yamin Amin",
            review: "I'm impressed with the educational value of the toys at Toyland. My kids have learned so much while having fun. It's a win-win for both education and entertainment!",
            rating: 5,
            customerImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Ahsan Ullah",
            review: "Toyland has a fantastic selection of toys for kids of all ages. The website is easy to navigate, and the ordering process is smooth. Plus, the delivery is always prompt. Great experience overall!",
            rating: 4.8,
            customerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Sabbir Hossain",
            review: "I've never seen my child so excited about toys before. The toys from Toyland have brought so much joy and laughter into our home. It's a wonderful feeling as a parent to see my child so happy.",
            rating: 5,
            customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <section className="py-32 bg-[#e5f9ff] curve">
            <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                <h3 className="text-3xl font-bold mb-5">Our Customer's Review</h3>
                <p className="font-medium">Explore the heartwarming experiences and feedback shared by our valued customers in the 'Customer Review' section.</p>
            </div>
            <div className="my-container grid md:grid-cols-2 gap-5">
                <div className="my-auto">
                    <h3 className="text-xl font-bold mb-5 text-[#12aee0]">Voices of Delighted Customers</h3>
                    <p className="">Explore the heartwarming experiences and feedback shared by our valued customers in the 'Customer Review' section. Hear directly from parents, caregivers, and little ones themselves as they express their joy and satisfaction with their Toyland experiences.
                    </p>
                    <p className="mt-5">
                        Discover firsthand accounts of how our toys have sparked imagination, fostered learning, and brought smiles to children's faces. Join the chorus of delighted customers and share your own thoughts, making Toyland a community of playtime happiness
                    </p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper bg-white rounded-xl  "
                >

                    {
                        clientReviews.map((review, index) => <SwiperSlide
                            key={index}
                        >
                            <div className="p-5 m-5 border-2 border-[#12aee0] rounded-lg">
                                <figure className="h-20 w-20 border-2 border-[#12aee0] rounded-full mx-auto mb-5">
                                    <img src={review.customerImage} className="w-full h-full object-contai rounded-full" alt="" />
                                </figure>
                                <h5 className="text-xl font-semibold text-[#12aee0]">{review.name}</h5>
                                <Rating
                                    placeholderRating={review.rating}
                                    emptySymbol={<StarIcon className='h-6 w-6' />}
                                    placeholderSymbol={<StarIcon className='h-6 w-6 text-warning' />}
                                    fullSymbol={<StarIcon className='h-6 w-6 text-warning' />}
                                    readonly
                                />

                                <p className="font-medium text-base">{review.review}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>

    );
};

export default ClientReview;