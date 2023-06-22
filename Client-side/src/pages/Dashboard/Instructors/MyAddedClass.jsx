import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useClass from "../../../Hooks/useClass";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const MyAddedClass = () => {
    const [postClass]=useClass()
    const { user } = useContext(AuthContext);
    const filterByMail=postClass.filter(myClass=>user.email==myClass.instructorMail)
    // console.log(filterByMail)    
    return (
        <div className="grid md:grid-cols-2 gap-10 p-10">
            {
                filterByMail?.map((classItem) =>
                <ClassCard 
                    key={classItem._id}
                    classItem={classItem}
                ></ClassCard>)
            }
        </div>
    );
};

const ClassCard=(classItem)=>{
    // console.log(classItem)
    const {classImage, className, status}=classItem.classItem
    const [axiosSecure] = useAxios();
    const { data: feedback = [] } = useQuery(['feedback'], async () => {
        const res = await axiosSecure.get(`/feedback/${_id}`)
        return res.data;
    })
    // TODO: show feedback when denied
    console.log(feedback)
    return(
        <div className="card bg-base-100 shadow-xl mb-10">
            <figure><img className="" src={classImage} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{className}</h2>
                <p><span className="text-xl text-yellow-600">Status:</span> {status}</p>
                <p><span className="text-xl text-yellow-600">Feedback:</span> </p>
                <button className="btn my-btn">Update</button>
            </div>
        </div>
    )
}

export default MyAddedClass;