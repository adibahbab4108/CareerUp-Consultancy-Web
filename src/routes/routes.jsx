import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../components/Navbar/ServiceDetails";
import Services from "../components/Navbar/Services";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/service_category.json"),
                children: [
                    {
                        path: "",
                        element: <Services />,
                        loader: () => fetch("/all_services.json")
                    },
                    {
                        path: "/category/:category",
                        element: <Services />,
                        loader: ({params})=>fetch(`/${params.category}.json`)
                    },

                ]
            },
            {
                path: "/service/:s_name",
                element: <ServiceDetails />
            }
        ]
    },
    {
        path: "*",
        element: <h1> Error Kaise kono ek jaigai</h1>
    }
])
export default routes;