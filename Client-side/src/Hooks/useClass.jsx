import { useQuery } from "@tanstack/react-query";

const useClass = () => {    
    const { refetch, data: postClass = []} = useQuery({
        queryKey: ['postClass',],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/postClass`);
            // console.log('res from axios', res)
            return res.json();
        },
    })
    return [postClass, refetch]
};

export default useClass;