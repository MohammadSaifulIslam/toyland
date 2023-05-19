import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Others/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <LoadingSpinner/>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'}  replace={true}></Navigate>
};

export default PrivateRoutes;