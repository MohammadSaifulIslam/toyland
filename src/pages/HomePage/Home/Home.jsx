import websiteTitle from "../../../Others/WebsiteTitle/WebsiteTitle";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    websiteTitle('Toy Land | Home')
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