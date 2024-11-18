import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import Home from "../pages/Home";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-col min-h-screen">

            <header>
                <Navbar />
            </header>
            <main className="flex-1">
                <Outlet />
                {/* <Home/> */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;