
const ToyCard = ({ toy }) => {
    const { pictureURL, name, price, rating } = toy;
    return (
        <div className="card card-compact bg-base-100 border-2 border-[#12aee0]">
            <figure><img src={pictureURL} alt="Shoes" className="w-full h-80 object-contain" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-lg font-semibold">Price: <span className="text-[#12aee0]">${price}</span></p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                    <button className="my-btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;