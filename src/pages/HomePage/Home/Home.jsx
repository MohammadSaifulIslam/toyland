import websiteTitle from "../../../Others/WebsiteTitle/WebsiteTitle";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Contact from "../Contact/Contact";
import FlashSale from "../FlashSale/FlashSale";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    websiteTitle('Toy Land | Home')
    return (
        <div className="min-h-[calc(100vh-348px)]">
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <FlashSale/>
            <ClientReview/>
            <Contact/>
        </div>
    );
};

export default Home;