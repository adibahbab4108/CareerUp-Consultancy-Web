import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { userLogin, setUser, googleSignIn } = useContext(AuthContext)

    const [error, setError] = useState({})

    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const email = formData.get("email")
        const password = formData.get("password")



        userLogin(email, password)
            .then(result => {
                const user = result.user;
                if (user) setUser(user);
                toast.success("Login Successfull!")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                setError({ ...error, authError: error.code });
            });

    }
    const handleSignWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)

            })
    }
    return (
        <>
            <div className="hero bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
                <div className="card w-96  rounded-2xl">
                    <button className="btn-style2 my-3 w-fit" onClick={() => navigate(-1)}>go back</button>
                    <form
                        onSubmit={handleSubmit}
                        className="card-body p-6 rounded-lg bg-gray-800 shadow-inner">
                        <h1 className="text-2xl font-bold text-center text-white mb-8">Login to Your Account</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="input input-bordered bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-pink-500 shadow-md"
                                required
                            />
                        </div>

                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text text-gray-300">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                className="input input-bordered bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-pink-500 shadow-md"
                                required
                            />
                            {error.authError && (
                                <p className="mt-2 text-sm text-red-600">{error.authError}</p>
                            )}
                            <label className="label mt-2">
                                <a href="#" className="label-text-alt text-pink-500 link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn-style2 shadow-lg">Login</button>
                            <label className="label mt-4 text-center">
                                <span className="label-text text-gray-300">
                                    Don't have an account?{' '}
                                    <Link to="/register" className="text-pink-500 font-bold">
                                        Register
                                    </Link>
                                </span>
                            </label>
                        </div>
                    </form>
                    <h4 className="text-center font-bold text-white">Or</h4>
                    <div className="form-control mt-6">
                        <button onClick={handleSignWithGoogle} className="btn">Login with <FcGoogle /></button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;