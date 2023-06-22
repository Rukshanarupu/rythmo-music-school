import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
 
    const onSubmit = (data) => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
        // const userData = JSON.parse(localStorage.getItem(data.email));
        // if (userData) { // getItem can return actual value or null
        //     if (userData.password === data.password) {
        //         console.log(userData.name + " You Are Successfully Logged In");
        //     } else {
        //         console.log("Email or Password is not matching with our record");
        //     }
        // } else {
        //     console.log("Email or Password is not matching with our record");
        // }
    };


    return (
        <div>
            <div className='text-center pt-20'>
                <h1 className='text-4xl'>Welcome Back</h1>
                <p className="">We are <span className='text-tertiary font-semibold'>Happy</span> to see you back</p>
            </div>

            <div className='container mx-auto grid md:grid-cols-2 gap-5 justify-between'>
                <div className=" rounded flex flex-col items-center justify-center">
                    {/* User profile image */}
                    <img className="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
                    <form onSubmit={handleSubmit(onSubmit)} method="post" className="mt-8 mb-4">
                        <div className="mb-4">
                            <label className="sr-only">Email address</label>
                            <input className="border-solid border border-gray-400 rounded px-2 py-3" type="email" name="email" placeholder="Email address" {...register("email", { required: true })} />
                            {errors?.email && <span style={{ color: "red" }}>*Email* is mandatory </span>}
                        </div>
                        <div>
                            <label className="sr-only">Password</label>
                            <input className="border-solid border border-gray-400 rounded px-2 py-3" type="password" name="password" placeholder="Password" {...register("password")} />
                            {errors?.password && <span style={{ color: "red" }}>*Email* is mandatory </span>}
                        </div>
                        <div className="my-4 flex items-center">
                            <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
                            <label>Remember me</label>
                        </div>
                        <div>
                            <button type='submit' className='mb-3 bg-tertiary hover:bg-cyan-500 w-full rounded-md  text-white' >Login</button>
                        </div>
                    <a href="#" className="self-start">Forgot the password?</a>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Do not have an account yet?{' '}
                        <Link to='/signup' className='hover:underline hover:text-orange-700 text-gray-600'>
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/login.JPG" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;