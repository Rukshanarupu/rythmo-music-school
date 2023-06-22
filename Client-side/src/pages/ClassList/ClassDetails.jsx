import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../../Hooks/useSelectedClass";
import useUsers from "../../Hooks/UseUsers";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const ClassDetails = ({classItem}) => {
    const [users]=useUsers()
    const [, refetch] = useSelectedClass();
    const navigate = useNavigate();
    const location = useLocation();
    const {_id, availableSeats, duration, className, schedule, classImage, price, instructorName}=classItem

    const handleAddClass = classItem => {
        console.log(classItem);
        const classSingle = {classId: _id, availableSeats, className, price, schedule, instructorName}
        fetch(`${import.meta.env.VITE_API_URL}/selectClass`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classSingle)
        })
        .then(res => res.json())
        .then(data => {
            console.log("after select class", data)
            if(data.insertedId){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class is selected successfully',
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
        })
    }

    // some logic is here
    const isClassSelected = !users && users.role !== 'admin' && users.role !== 'instructor';
    const isClassFull = classItem.availableSeats === 0;
    const cardStyle = isClassFull ? { background: 'rgb(244 63 94)' } : {};

    const warning = () => {
        toast.error('You have to log in first to select the class')
        navigate('/login', {state: {from: location}})
    };

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-10 grid md:grid-cols-2" style={cardStyle}>
            <figure><img className="" src={classImage} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{className}</h2>
                <p className="text-md  text-secondary">Available Seat:<span className="text-textColor font-bold"> {availableSeats}</span></p>
                <p className="text-md text-secondary">Price for the course: <span className="text-textColor font-bold"> {price} $</span></p>
            
                <p className="text-md text-secondary">Class Schedule:<span className="text-textColor font-bold"> {schedule}</span> </p>
                <p className="text-md text-secondary">Class Duration: <span className="text-textColor font-bold">{duration}</span></p>
                

                <div className="card-actions justify-end">
                {
                    users ?
                    <button 
                    onClick={() => handleAddClass(classItem)}
                    disabled={isClassFull || isClassSelected} 
                    className="btn my-btn">
                        Select
                    </button>:
                    <button 
                    onClick={warning}
                    disabled={isClassFull || isClassSelected} 
                    className="btn my-btn">
                        Select
                    </button>
                }
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;