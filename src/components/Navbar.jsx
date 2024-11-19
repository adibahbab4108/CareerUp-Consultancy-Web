import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <>
            <div className="navbar bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl px-4 py-3">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="mr-2 btn-style2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gradient-to-br from-gray-700 to-gray-800 text-gray-300 rounded-xl z-[1] mt-3 w-52 p-2 shadow-lg"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className="hover:text-gray-100 transition-colors duration-200"
                                >
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="text-2xl font-bold text-gray-100 hover:text-gray-300 transition-colors duration-200"
                    >
                        CareerUp
                    </Link>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        <li>
                            <NavLink
                                to="/"
                                className="text-gray-300 hover:text-gray-100 transition-colors duration-200"
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center space-x-4">
                    <div className="text-gray-300 font-semibold">
                        {user && <span>Welcome, {user.name}</span>}
                    </div>
                    {user ? (
                        <Link
                            to="/"
                            onClick={logOut}
                            className="btn-style2"
                        >
                            Log Out
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="btn-style2"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
