import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
        </div>
    );
};

export default Home;