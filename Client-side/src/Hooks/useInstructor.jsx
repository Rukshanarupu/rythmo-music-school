import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "./useAxios";

const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log(res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;