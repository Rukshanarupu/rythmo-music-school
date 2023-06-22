import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
    const {data: selectClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['selectClass'],
        queryFn: async() => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/postClass`);
            // console.log('res from axios', res)
            return res.json();
        }
    })
    console.log(selectClass)
    return [selectClass, loading, refetch]
};
export default useSelectedClass;