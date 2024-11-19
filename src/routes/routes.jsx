import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../components/ServiceDetails";
import Services from "../components/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/NotFound";

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
                        loader: ({ params }) => fetch(`/${params.category}.json`)
                    },

                ]
            },
            {
                path: "/service/:id/:s_name",
                element:
                    <PrivateRoute>
                        <ServiceDetails />
                    </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch("/all_services.json");
                    const { services } = await res.json();
                    const Data = services.find(service => service.id == params.id);
                    return Data
                }
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])
export default routes;