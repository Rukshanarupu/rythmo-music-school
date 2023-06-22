import { useQuery } from "@tanstack/react-query";

const useMusic = () => {
    const {data: musicDetails = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['musicDetails'],
        queryFn: async() => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/musicDetails`);
            // console.log(res)
            return res.json();
        }
    })

    return [musicDetails, loading, refetch]
};

export default useMusic;