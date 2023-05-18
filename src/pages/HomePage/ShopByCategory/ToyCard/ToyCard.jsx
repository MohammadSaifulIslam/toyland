
const ToyCard = ({ toy }) => {
    const { pictureURL, name, price, rating } = toy;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={pictureURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;