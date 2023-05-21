import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import logo from '../../../assets/logo/NicePng_teddy-bear-png_43607.png';
import navbarImage from '../../../assets/navbar/header-after.png';
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <section className=" bg-white py-3 relative">
            <nav className="my-container navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black text-lg font-semibold">
                            <li>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/all-toy' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                    All Toys
                                </NavLink>
                            </li>
                            {
                                user && <>
                                    <li>
                                        <NavLink to='/my-toy' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                            My Toys
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/add-toy' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                            Add A Toy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/my-cart' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                            <span className="flex items-center gap-2">
                                                My Cart
                                                <FaShoppingCart className="h-4 w-4" />
                                            </span>
                                        </NavLink>
                                    </li>
                                </>

                            }
                            <li>
                                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                    Blogs
                                </NavLink>
                            </li>
                            {
                                user &&
                                <li><span onClick={handleLogout}>
                                    Logout
                                </span></li>
                            }
                        </ul>
                    </div>
                    <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
                    <Link to='/' className="text-2xl font-bold">Toy<span className="text-[#12aee0]">Land</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 font-semibold">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/all-toy' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                All Toys
                            </NavLink>
                        </li>
                        {
                            user && <>
                                <li>
                                    <NavLink to='/my-toy' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                        My Toys
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/add-toy' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                        Add A Toy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/my-cart' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                        <span className="flex items-center gap-2">
                                            My Cart
                                            <FaShoppingCart className="h-5 w-5" />
                                        </span>
                                    </NavLink>
                                </li>
                            </>

                        }
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#12aee0]' : ''}>
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <button onClick={handleLogout} className='my-btn hidden lg:block'>Logout</button>
                    }
                    {user ?
                        <div className="hover-text h-12 w-12 ml-4 cursor-pointer">
                            <img className='w-full h-full rounded-full border-2 border-[#12aee0]' src={user?.photoURL} alt="" />
                            <span className="tooltip-text" id="left">{user?.displayName}</span>
                        </div>

                        : <Link to='/login' className='my-btn ml-4'>Login</Link>
                    }

                </div>
            </nav>
            <div className='absolute w-full h-5 -bottom-[16px] left-0 z-50 '>
                <img src={navbarImage} alt="" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default Navbar;