import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location =useLocation()
    console.log(location.pathname)

    if (loading) return  <Loading />

    if (user && user?.email) return children
    else return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRoute;