import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorAnimation from '../../assets/lottie/84048-404-page-not-found.json';
import websiteTitle from "../WebsiteTitle/WebsiteTitle";
const ErrorPage = () => {
    websiteTitle('Toy Land | 404 Error ')
    return (
        <section className='h-screen w-full bg-[#e5f9ff] relative' >
        <Lottie className="h-full" animationData={errorAnimation} loop={true} />
          <div className=''>
            <Link to='/' className='my-btn w-fit absolute bottom-20 right-1/2 translate-x-1/2 text-center'>
              Back to homepage
            </Link>
          </div>
      </section>
    );
};

export default ErrorPage;