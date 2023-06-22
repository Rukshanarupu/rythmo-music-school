import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "./useAxios";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
            // console.log(res.data.admin)
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;