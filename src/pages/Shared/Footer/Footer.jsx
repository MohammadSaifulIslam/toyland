import { Link } from "react-router-dom";
import logo from '../../../assets/logo/NicePng_teddy-bear-png_43607.png';

const Footer = () => {
    return (
        <section className='bg-black'>
        <footer className="my-container footer mt-24 p-10 text-neutral-content">
           <div>
               <span className="footer-title">Social</span>
               <a  href='https://www.facebook.com/khan.saiful.90857/' target='_blank' className="link link-hover">Facebook</a>
               <a  href='https://twitter.com/Saiful6741' target='_blank' className="link link-hover">Twitter</a>
               <a  href='https://www.linkedin.com/in/saiful6741/' target='_blank' className="link link-hover">Linkdin</a>
               <a  href='https://github.com/MohammadSaifulIslam' target='_blank' className="link link-hover">Github</a>
           </div>
           <div>
               <span className="footer-title">Short Link</span>
               <Link to='/' className="link link-hover">Home</Link>
               <Link to='/all-toy' className="link link-hover">All Toys</Link>
               <Link to='/blog' className="link link-hover">Blog</Link>
           </div>
           <div>
               <span className="footer-title">Legal</span>
               <a className="link link-hover">Terms of use</a>
               <a className="link link-hover">Privacy policy</a>
               <a className="link link-hover">Cookie policy</a>
           </div>
           <div>
              <div className="flex gap-1 items-center">
              <img src={logo} alt="logo"  className="w-10 h-10 object-contain"/>
                    <Link to='/' className="text-2xl font-bold">Toy<span className="text-blue-500">Land</span></Link>
              </div>
            
               <div className="form-control w-80">
                   <label className="label">
                       <span className="label-text text-white">Enter your email address</span>
                   </label>
                   <div className="relative">
                       <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16 focus:outline-[#12aee0] text-black" />
                       <button className="btn bg-[#12aee0] absolute top-0 right-0 rounded-l-none  hover:bg-[#12aee0]">Subscribe</button>
                   </div>
               </div>
           </div>
       </footer>
       <p className="text-sm text-white text-center pb-5">&copy; Copyright  2023 - All right reserved by ToyLand</p>
      </section>
    );
};

export default Footer;