import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext)

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
                setError({...error, authError: error.code});
            });

    }
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-2xl font-bold mb-5 text-center">Login to your Account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label text-sm text-red-600">
                                {error.authError && <p> {error.authError} </p>}
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <label className="label">
                                <span className="label-text">Don't have an account? <Link to="/register" className='text-blue-700 font-bold'>Register</Link> </span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;