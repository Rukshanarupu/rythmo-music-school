import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
    const [axiosSecure] = useAxios();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        // console.log(user)
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    
    const handleMakeInstructor = user =>{
        fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is a Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
    <div className="overflow-x-auto w-[90%] m-10">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th className="">Make Admin</th>
                    <th className="">Make Instructor</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user, index) =>
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{
                            <button disabled={user?.role === 'admin'} onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-primary">Make Admin</button> 
                        }</td>
                        <td>{
                            <button disabled={user?.role === 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-primary">Make Instructor</button> 
                        }</td>
                    </tr>)
                }

            </tbody>
        </table>
    </div>
    );
};

export default ManageUsers;