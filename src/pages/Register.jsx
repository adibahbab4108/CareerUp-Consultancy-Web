import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState({})
    const [show, setShow] = useState(false)
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
            <div className="hero bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
                <div className="card w-96  rounded-2xl">
                    <button className="btn-style2 my-3 w-fit" onClick={() => navigate(-1)}>go back</button>
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-2xl font-bold mb-5 text-center text-white">Register to your Account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered" required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">PhotoURL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="photo_url"
                                name="photo_url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-gray-300">Password</span>
                            </label>

                            <input

                                type={show ? "text" : "password"}
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <button className=" absolute right-4 top-12 text-2xl" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</button>

                            {error.password && <p className="text-red-500">{error.password}</p>}
                        </div>
                        <div className="form-control mt-6">
                            {error.authError && <p className="text-red-500">{error.authError}</p>}
                            <button
                                className="btn-style2"

                            >
                                Register
                            </button>
                            <label className="label">
                                <span className="label-text text-gray-300">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-blue-400 font-bold">
                                        Login
                                    </Link>
                                </span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Register;