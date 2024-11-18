import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Navbar/categories";
import Services from "../components/Navbar/Services";
import Slider from "../components/Navbar/Slider";

const Home = () => {
    const {categories}=useLoaderData()
    
    return (
        <>
            <Slider />
            <section className="mt-16">
                <Categories categories={categories} />
                <Outlet/>
                
            </section>
        </>
    );
};

export default Home;