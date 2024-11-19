import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <>
            <div className="w-11/12 mx-auto flex flex-col min-h-screen">

                <header>
                    <Navbar />
                </header>
                <main className="flex-1">
                    <Outlet />
                </main>
                <footer>
                </footer>
            </div>
            <Footer />
            
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
                theme="light"
                transition:Zoom
            />
        </>
    );
};

export default MainLayout;