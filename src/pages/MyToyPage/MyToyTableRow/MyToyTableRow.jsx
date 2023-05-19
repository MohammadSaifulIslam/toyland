import { FaEdit, FaTrashAlt } from 'react-icons/fa';
const MyToyTableRow = ({ toy, index }) => {
    const { name, pictureURL, availableQuantity, price } = toy;
    return (
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
            <td>{price}</td>
            <td>
                {availableQuantity}
            </td>
            <td>
                <FaEdit className='text-xl cursor-pointer text-[#12aee0]'/>
            </td>
            <td>
                <FaTrashAlt  className='text-xl cursor-pointer text-red-500'/>
            </td>
        </tr>
    );
};

export default MyToyTableRow;