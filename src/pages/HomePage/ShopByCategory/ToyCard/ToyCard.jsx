import { StarIcon } from '@heroicons/react/24/solid';
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
    const { _id, pictureURL, name, price, rating } = toy;
    return (
        <div className="card card-compact bg-base-100 border-2 border-[#12aee0]">
            <figure><img src={pictureURL} alt="Shoes" className="w-full h-80 object-contain" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-lg font-semibold">Price: <span className="text-[#12aee0]">${price}</span></p>
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
                <Link to={`/toy/${_id}`}> <button className="w-full my-btn">View Details</button></Link>
            </div>
        </div>
    );
};

export default ToyCard;