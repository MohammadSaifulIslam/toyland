import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import websiteTitle from '../WebsiteTitle/WebsiteTitle';

const Login = () => {
    const {loginUser,loginWithGoogle,loginWithGithub} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'
    console.log(from);
    websiteTitle('Toy Land | Login')
    
    const handleLogin = event => {
        setError(null)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You Successfully Logged in'
                  })
                form.reset()
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }


    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(result => {
            console.log(result.user)
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'You Successfully Logged in'
              })
            navigate(from)
        }
            )
        .catch(error=> console.log(error))
    }
    const handleGithubLogin =()=>{
        loginWithGithub()
        .then(result => {
            console.log(result.user)
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'You Successfully Logged in'
              })
            navigate(from)
        }
            )
        .catch(error=> console.log(error))
    }
    return (
        <section className='my-container my-20 '>
        <form onSubmit={handleLogin} className='mx-5 rounded-xl shadow-xl  md:w-1/3 md:mx-auto px-5 py-10 border-2 border-[#12aee0]'>
           <h4 className='text-[#12aee0] text-2xl font-bold mb-5 text-center'>Login Form</h4>
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Your Email</span>
               </label>
               <label className="">
                   <input type="email" name='email' placeholder='example@gmail.com' className='my-input' required />
               </label>
           </div>
           <div className="form-control mt-4">
               <label className="label">
                   <span className="label-text">Your Password</span>
               </label>
               <label className="relative">
                   <input type={showPass ? 'text' : 'password'} name='password' placeholder='*******' className=' my-input mb-1' required />
                   <span>
                       {
                           !showPass ? <EyeIcon title='Show password' onClick={()=> setShowPass(true)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeIcon>
                               : <EyeSlashIcon title='Hide password'  onClick={()=> setShowPass(false)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeSlashIcon>
                       }
                   </span>
               </label>
           </div>
           <Link to='/reset-password' className=" btn-link text-error cursor-pointer normal-case" >Forgot password?</Link>
           <div className="form-control mt-4">
               <label className="flex gap-4 cursor-pointer">
                   <input type="checkbox" className="checkbox" />
                   <span className="">Remember me</span>
               </label>
           </div>
           <button className='my-btn w-full mt-5'>Login</button>
           <p className='text-error text-center mt-2'>{error}</p>
           <p className='text-center mt-2'>Don't have an account? <Link to='/register' className='text-[#12aee0] underline'>Create an account</Link></p>

           {/* login with google and github */}
           <div className="divider">Or</div>
          <div className="flex justify-between gap-4 mt-2">
          <span onClick={handleGoogleLogin} className='outline-btn w-full flex items-center justify-center gap-2 '> <FaGoogle></FaGoogle>Google
         
          </span>
          <span onClick={handleGithubLogin} className='outline-btn w-full flex items-center justify-center gap-2 '>
            <FaGithub/>
            Github</span>
          </div>
       </form>
      </section>
    );
};

export default Login;