import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <ScrollRestoration/>
           <Outlet/>
           <Footer/>
           <ScrollToTop
            smooth 
            top={400}
            color="white"
           className={'!bg-[#12aee0] !rounded-full !font-semibold !flex !justify-center !items-center'}
           />
        </div>
    );
};

export default Main;