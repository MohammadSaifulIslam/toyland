import { StarIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa';
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Providers/AuthProvider/AuthProvider';
import { addToDb } from '../../../../utility/fakeDb';

const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const { _id, pictureURL, name, price, rating } = toy;
    const navigate = useNavigate();
    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: "Haven't permision",
                text: 'You have to log in first to view details'
            })
            navigate(`/toy/${_id}`)
           
        }
        else {
          navigate(`/toy/${_id}`)
        }
    }

    const handleAddToCart = (id)=>{
        if(user){
            addToDb(id)
            toast.success('Toy added to cart')
        }
        else{
            Swal.fire({
                icon: 'error',
                title: "Haven't permision",
                text: 'You have to log in first.'
            })
            navigate(`/login`)
        }
    }
    return (
        <div className="card card-compact bg-base-100 border-2 border-[#12aee0]">
            <figure className='overflow-hidden'><img src={pictureURL} alt="Shoes" className="w-full h-72 object-contain duration-700 hover:scale-110 " /></figure>
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
                <button onClick={handleViewDetails} className="w-full my-btn">View Details </button>
                <button onClick={()=>handleAddToCart(_id)} className='outline-btn w-full mt-1 flex gap-2 items-center justify-center'>Add to cart <FaCartPlus className='w-6 h-6 ' /></button>
            </div>
        </div>
    );
};

export default ToyCard;