import websiteTitle from "../../../Others/WebsiteTitle/WebsiteTitle";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Contact from "../Contact/Contact";
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
            <Contact/>
        </div>
    );
};

export default Home;