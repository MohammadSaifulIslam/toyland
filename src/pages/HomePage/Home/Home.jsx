import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <ClientReview/>
        </div>
    );
};

export default Home;