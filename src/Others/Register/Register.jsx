import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import websiteTitle from "../WebsiteTitle/WebsiteTitle";

const Register = () => {
    const {createUser,updateUser} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    websiteTitle('Toy Land | Register')

    const handleRegister =event =>{
        setError(null)
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name,
            photo,
            email,
            password
        }
        console.log(user)

        // password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must have a uppercase')
            return
        } else if (!/(?=.*[a-z])/.test(password)) {
            setError('password must have a lowercase')
            return
        } else if (!/(?=.*\d)/.test(password)) {
            setError('password must have a number')
            return
        } else if (!/(?=.*[-\!\@\#\$\.\%\&\*])/.test(password)) {
            setError('password must have a special character')
            return
        }
        else if (password.length < 6) {
            setError('password must be at least 6 characters')
            return
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Your Account Successfully Created'
              })
              // user name and photo update
              updateUser(name, photo)
              .then(()=>{})
              .catch((error)=> console.log("an error occuered", error))
            form.reset()
            navigate('/')
        })
        .catch(error=>
            {
                setError(error.message)
                console.log(error)
            })
    }
    return (
        <section className='my-container my-10 '>
            <form onSubmit={handleRegister} className='mx-5 rounded-xl shadow-xl  md:w-1/3 md:mx-auto px-5 py-10 border-2 border-[#12aee0]'>
                <h4 className='text-[#12aee0] text-2xl font-bold mb-5 text-center'>Register Form</h4>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="">
                        <input type="text" name='name' placeholder='Saiful Islam' className='my-input' required />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URl</span>
                    </label>
                    <label className="">
                        <input type="text" name='photo' placeholder='photo.jpg' className='my-input' required />
                    </label>
                </div>
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
                        <input type={showPass ? 'text' : 'password'} name='password' placeholder='*******' className='my-input mb-1' required />
                        <span>
                            {
                                !showPass ? <EyeIcon title='Show password' onClick={()=>setShowPass(true)} className='h-6 w-6 absolute top-3 right-3 z-20 cursor-pointer'></EyeIcon>
                                    : <EyeSlashIcon title='Hide password' onClick={()=>setShowPass(false)} className='h-6 w-6 absolute top-3 right-3 z-20 cursor-pointer'></EyeSlashIcon>
                            }
                        </span>
                    </label>
                </div>
                <div className="form-control mt-4">
                    <label className="flex gap-4 cursor-pointer">
                        <input type="checkbox" className="checkbox" required />
                        <span className="">Accept <Link to='/terms' className='underline'>Terms & Conditions</Link></span>
                    </label>
                </div>
                <button className='my-btn w-full mt-5'>Create an account</button>
                <p className='text-error text-center mt-2'>{error}</p>
                <p className='text-center mt-2'>Already have an account? <Link to='/login' className='text-[#12aee0] underline'>Login</Link></p>
            </form>
        </section>
    );
};

export default Register;