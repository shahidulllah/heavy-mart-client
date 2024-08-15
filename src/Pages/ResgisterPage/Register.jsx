import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);
        setError('');
        setSuccess('');

        //Condition
        if (password.length < 6) {
            setError('Your password should be at least 6 characters or longer..!')
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setError('Your password should have at least one Uppercase charater..!')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setError('Your password should have at least one Lowercase charater..!')
            return;
        }


        // Authentication
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Registration Complete..')
                Swal.fire({
                    title: "Good job!",
                    text: "Your registration is Successfull..!",
                    icon: "success"
                });
                navigate('/login');

                updateUser(name, photoUrl)
                    .then(() => console.log('profile updated'))
                    .catch()
            })
            .catch(error => {
                console.error(error);

            })
    }

    // google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="bg-base-300 flex justify-center p-4">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 bg-purple-200">
                <h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>

                <form onSubmit={handleRegister} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4 mb-7">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Your Name</label>
                            <input type="text" name="name" placeholder="Type Your Name" className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Photo URL</label>
                            <input type="text" name="photoUrl" placeholder="Give Your Photo URL" className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="example@gamil.com" className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <div className="relative form-control">
                                <input type={showPassword ? "text" : "password"} name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                                <span className="absolute right-5 top-4 text-lg" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </span>
                            </div>
                        </div>
                        {
                            error && <p className="mt-2 text-red-600 font-serif ">{error}</p>
                        }
                        {
                            success && <p className="mt-2 text-green-600 font-serif ">{success}</p>
                        }
                    </div>
                    <button type="submit" className="btn bg-purple-500 hover:bg-purple-400 border-none w-full px-8 py-3 text-xl font-bold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                </form>
                <p className="text-sm text-center dark:text-gray-600 mt-3">Already have an account? <Link to='/login'><span className="text-blue-600 font-bold">Login</span> here.</Link>
                </p>
                <div className="flex items-center w-full my-5">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <div className="space-y-4">
                    <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border border-blue-500 rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;