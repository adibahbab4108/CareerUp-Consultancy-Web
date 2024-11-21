import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Feedback from "../components/Feedback";
import About from "../components/About";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MainLayout = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen ">
                <div  className="w-11/12 mx-auto  min-h-screen rounded-xl shadow-lg ">
                    <header>
                        <Navbar />
                    </header>
                    <main className=" mt-4 p-2">
                        <Outlet />
                    </main>
                    <Feedback />
                    <About />
                </div>
                <Footer />
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Zoom
            />
        </>
    );
};

export default MainLayout;