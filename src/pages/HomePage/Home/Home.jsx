import websiteTitle from "../../../Others/WebsiteTitle/WebsiteTitle";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Contact from "../Contact/Contact";
<<<<<<< HEAD
import FlashSale from "../FlashSale/FlashSale";
=======
>>>>>>> 92d7c4a4855769df97f278881c9adc3b83de17bd
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    websiteTitle('Toy Land | Home')
    return (
        <div className="min-h-[calc(100vh-348px)]">
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
<<<<<<< HEAD
            <FlashSale/>
=======
>>>>>>> 92d7c4a4855769df97f278881c9adc3b83de17bd
            <ClientReview/>
            <Contact/>
        </div>
    );
};

export default Home;