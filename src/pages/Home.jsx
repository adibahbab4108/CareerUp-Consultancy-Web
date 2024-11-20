import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
// import Services from "../components/Services";
import Slider from "../components/Slider";
import Feedback from "../components/Feedback";

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