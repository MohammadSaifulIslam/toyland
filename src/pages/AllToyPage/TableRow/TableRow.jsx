const TableRow = ({ toy, index }) => {
    const { name, sellerName, subcategory, price, availableQuantity, pictureURL } = toy;
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="avatar mask mask-squircle w-12 h-12">
                    <img src={pictureURL} alt="Toy picture" />
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{sellerName}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
                <button className="my-btn">Details</button>
            </th>
        </tr>
    );
};

export default TableRow;