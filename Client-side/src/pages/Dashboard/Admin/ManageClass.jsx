import useClass from "../../../Hooks/useClass";
import Swal from "sweetalert2";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { Link } from "react-router-dom";
// import axios from "axios";


const ManageClass = () => {
    const [postClass, refetch]=useClass()
    // console.log(postClass)

  const handleApproveBtn = (classItem) => {
    fetch(`${import.meta.env.VITE_API_URL}/postClass/approved/${classItem._id}`, {
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
                title: `successfully approved ${classItem.className} class`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
  };

  const handleDenyBtn = async (classItem) => {
    fetch(`${import.meta.env.VITE_API_URL}/postClass/denied/${classItem._id}`, {
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
                title: `successfully denied ${classItem.className} class`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
  };


    return (
        <div className="w-[80%]">
            
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Class image</th>
                        <th className="">Instructor</th>
                        <th className="">Instructor Email</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Change status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postClass?.map((classItem, index) =>
                        <tr key={classItem._id}>
                            <td>{index + 1}</td>
                            <td>{classItem.className}</td>
                            <td><img src={classItem.classImage} alt="" /></td>
                            <td>{classItem.instructorName}</td>
                            <td>{classItem.instructorMail}</td>
                            <td>{classItem.availableSeats}</td>
                            <td>{classItem.price}</td>
                            <td>{classItem.status}</td>
                            <td>
                                    <Link to={`/dashboard/feedback/${classItem._id}`} 
                                    className="btn btn-outline hover:bg-primary text-lg text-primary border-primary"
                                    disabled={classItem.status === 'approved' || classItem.status === 'pending'}>
                                        <MdFeedback className=""></MdFeedback>
                                    </Link>
                                
                            </td>
                            <td>
                                {
                                    <button 
                                    disabled={classItem.status === 'approved'} 
                                    onClick={() => handleApproveBtn(classItem)} 
                                    className="btn btn-ghost bg-primary mr-2">
                                        <FaCheck></FaCheck>
                                    </button> 
                                }
                                {
                                    <button 
                                    disabled={classItem.status === 'denied'} 
                                    onClick={() => handleDenyBtn(classItem)} 
                                    className="btn btn-ghost rounded-full bg-primary">
                                        <FaTimes></FaTimes>
                                    </button> 
                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default ManageClass;