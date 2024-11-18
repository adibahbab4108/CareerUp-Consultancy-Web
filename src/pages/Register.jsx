import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
                    <form className="card-body">
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
                        </div>
                        <div className="form-control mt-6">
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