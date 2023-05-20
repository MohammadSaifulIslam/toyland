import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Others/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <LoadingSpinner/>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoutes;