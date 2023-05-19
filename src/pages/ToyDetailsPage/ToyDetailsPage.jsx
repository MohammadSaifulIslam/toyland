import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";


const ToyDetailsPage = () => {
    const [toyDetails, setToyDetails] = useState({});
    const { id } = useParams();

    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/toy/${id}`)
            .then(res => res.json())
            .then(data => setToyDetails(data))
    }, [id])

    const { pictureURL, sellerName, name, sellerEmail, subcategory, price, rating, availableQuantity, description } = toyDetails;

    return (
        <section className="py-20 bg-[#f9fcff]">
            <div className="my-container ">
                <div className="section-title mb-10 text-center lg:w-2/3 mx-auto">
                    <h3 className="text-3xl font-bold mb-5">Toy Details</h3>
                    <p className="font-medium">Discover the enchanting world of toy details. Dive into the intricate designs, materials, sizes, and special features of our toys. Explore each playtime companion up close and make an informed choice for your child. Find the perfect toy that sparks their imagination and brings boundless joy to their world.</p>
                </div>
                <div className='p-10 bg-white shadow-xl rounded-xl grid md:grid-cols-2 gap-5'>
                    <figure className='rounded-lg w-full h-[300px] md:h-full'><img className='object-cover w-full h-full rounded-lg' src={pictureURL} alt="" /></figure>
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
                        <div className="justify-end md:flex gap-5">
                            <button className="my-btn mt-5">Add to Cart</button>
                            <Link to='/'><button className="my-btn mt-5">Home to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetailsPage;