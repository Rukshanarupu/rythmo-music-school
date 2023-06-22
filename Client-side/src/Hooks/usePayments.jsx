import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const usePayments = () => {
    const[axiosSecure]=useAxios()
    const {user}=useContext(AuthContext)
    const {data: payments = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async() => {
            const res = await axiosSecure.get('/payments');
            // console.log(res)
            return res.data
        }
    })
    // console.log(payments)
    const filterPaymentByMail=payments.filter(payment=>user.email==payment.email)
    return [filterPaymentByMail, loading, refetch]
};

export default usePayments;