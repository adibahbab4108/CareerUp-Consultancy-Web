import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <>
            <div className="navbar bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl px-4 py-3">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="mr-2 btn-style2 lg:hidden"
                        >
                            <RiMenu2Line />
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

                <div className="navbar-end flex items-center space-x-4">
                    <div className="text-gray-300 font-semibold">
                        {user && <span>Welcome, {user.displayName}</span>}
                    </div>
                    {user ? (


                        <div className="dropdown ">
                            <div tabIndex={0}>
                                {user.photoURL ?
                                    <img className="w-10 rounded-full cursor-pointer hover:border hover:border-emerald-400" src={user.photoURL} />
                                    : <FaUserAlt />
                                }
                            </div>
                            <ul
                                tabIndex={0}
                                className=" dropdown-content rounded-xl z-[]  w-52 p-2  right-0"
                            >
                                <li>
                                    <Link 
                                    className="btn-style1 w-full block"
                                    to="/my-profile"
                                    >
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        onClick={logOut}
                                        className="btn-style1 w-full block">
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        </div>
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
