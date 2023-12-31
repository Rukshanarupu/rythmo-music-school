import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";
import LoadingSpinner from "../pages/Shared/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <LoadingSpinner/>
    }

    if (user && isInstructor) {
        return children;
    }
    return (
        <Navigate to="/" state={{from: location}} replace></Navigate>
    );
};

export default InstructorRoute;