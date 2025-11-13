import { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading/Loading";
import { AuthContext } from "./AuthProvider";

const PrivateRouter = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();


    if(loading){
        return <Loading></Loading>;
    }
    

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/Login'}></Navigate>
    
};

export default PrivateRouter;