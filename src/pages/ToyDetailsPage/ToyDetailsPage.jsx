import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa';
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from '../../Others/LoadingSpinner/LoadingSpinner';
import websiteTitle from '../../Others/WebsiteTitle/WebsiteTitle';
import { addToDb } from '../../utility/fakeDb';


const ToyDetailsPage = () => {
    const [toyDetails, setToyDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    websiteTitle('Toy Land | Toy Details')
    
    useEffect(() => {
        fetch(`https://toyland-server.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToyDetails(data)
                setIsLoading(false)
            })
    }, [id])

    const {_id, pictureURL, sellerName, name, sellerEmail, subcategory, price, rating, availableQuantity, description } = toyDetails;


    const handleAddToCart = (id)=>{
            addToDb(id)
            toast.success('Toy added to cart')
    }

    if(isLoading){
        return <LoadingSpinner/>
    }
    return (
        <section className="py-20 bg-[#e5f9ff] shadow-lg">
            <div className="my-container ">
                <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                    <h3 className="text-3xl font-bold mb-5">Toy Details</h3>
                    <p className="font-medium">Discover the enchanting world of toy details. Dive into the intricate designs, materials, sizes, and special features of our toys. Explore each playtime companion up close and make an informed choice for your child. Find the perfect toy that sparks their imagination and brings boundless joy to their world.</p>
                </div>
                <div className='p-10 bg-white shadow-xl rounded-xl grid md:grid-cols-2 gap-5'>
                    <figure className='rounded-lg w-full h-[300px] md:h-full'><img className='object-cover w-full h-full rounded-lg' src={pictureURL} alt="" /></figure>
                    <div className='flex items-center'>
                        <div>
                            <h4 className='font-extrabold text-4xl mb-4'>Toy Name: <span className="text-[#12aee0]">{name}</span></h4>
                            <p className="text-xl font-semibold mb-5">Subcategory: {subcategory}</p>
                            <p className="text-lg font-medium">Seller Name: {sellerName}</p>
                            <p className="text-lg font-medium">Seller Email: {sellerEmail}</p>
                            <p className="text-lg font-medium">Quantity: {availableQuantity}</p>
                            <p className="text-lg font-medium">Price: <span className="text-[#12aee0]">${price}</span></p>
                            <p className="text-lg font-medium flex items-center gap-2"><span>Rating: </span>
                                <Rating
                                    className='mt-2'
                                    placeholderRating={rating}
                                    emptySymbol={<StarIcon className='h-6 w-6' />}
                                    placeholderSymbol={<StarIcon className='h-6 w-6 text-warning' />}
                                    fullSymbol={<StarIcon className='h-6 w-6 text-warning' />}
                                    readonly
                                />
                            </p>


                            <p className="mt-5"><span className="text-lg font-semibold  ">Toy description:</span> {description}</p>
                            <div className="flex flex-col md:flex-row gap-4 items-center mt-5">
                                <Link to='/'><button className="my-btn  w-full md:w-fit">Back to Home</button></Link>

                                <button onClick={()=>handleAddToCart(_id)} className='outline-btn md:w-fit flex gap-2'>Add to cart <FaCartPlus className='w-6 h-6 ' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetailsPage;