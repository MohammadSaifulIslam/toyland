import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyToyTableRow = ({ toy, index, handleDeleteToy, setToyId }) => {
    const { _id, name, pictureURL, availableQuantity, price } = toy;


    return (
        <>
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={pictureURL} alt="Toy picture" />
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
<<<<<<< HEAD
                <td>
                    {availableQuantity}
                </td>
                <td>{price}</td>
=======
                <td>{price}</td>
                <td>
                    {availableQuantity}
                </td>
>>>>>>> 92d7c4a4855769df97f278881c9adc3b83de17bd
                <td>
                 <Link to={`/toy/${_id}`}>
                 <FaEye className='text-xl cursor-pointer text-[#12aee0]'></FaEye>
                 </Link>
                </td>
                <td>
                    <label htmlFor="my-modal-3" onClick={()=> setToyId(_id)}>
                    <FaEdit className='text-xl cursor-pointer text-[#12aee0]' />
                    </label>
                   
                </td>
                <td>
                    <FaTrashAlt onClick={() => handleDeleteToy(_id)} className='text-xl cursor-pointer text-red-500' />
                </td>

            </tr>

        </>
    );
};

export default MyToyTableRow;