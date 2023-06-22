import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import LoadingSpinner from "../pages/Shared/LoadingSpinner";

const AdminPvtRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <LoadingSpinner/>
    }

    if (user && isAdmin) {
        return children;
    }
    return (
        <Navigate to="/" state={{from: location}} replace></Navigate>
    );
};

export default AdminPvtRoute;