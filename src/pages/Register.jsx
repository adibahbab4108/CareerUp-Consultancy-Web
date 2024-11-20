import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name")
        const email = formData.get("email")
        const photo = formData.get("photo_url")
        const password = formData.get("password")

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            const passErrMsg = "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long";
            setError({ ...error, password: passErrMsg })
            return;
        }

        createNewUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)

                updateUserProfile({ displayName: name, photoURL: photo, })
                    .then(() => {
                        navigate("/")
                    })
                    
                toast.success("User successfully Created")
                navigate("/login")
            })
            .catch((error) => {
                const errorMessage = error.code;
                setError({ ...error, authError: errorMessage })
                return
            });

    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-2xl font-bold mb-5 text-center">Register to your Account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photo_url" name="photo_url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            {error.password && (
                                <p className="text-red-500">{error.password}</p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            {error.authError && (
                                <p className="text-red-500">{error.authError}</p>
                            )}
                            <button className="btn btn-primary">Register</button>
                            <label className="label">
                                <span className="label-text">Already have an account? <Link to="/login" className='text-blue-700 font-bold'>Login</Link> </span>
                            </label>
                        </div>
                        <h4 className="text-center font-bold">Or</h4>
                        <div className="form-control mt-6">
                            <button className="btn">Register with <FcGoogle /></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;