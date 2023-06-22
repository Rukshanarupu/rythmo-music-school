import { useState } from "react";
import BoardBanner from "../../../Components/BoardBanner";
import useAxios from "../../../Hooks/useAxios";
import { FaSpinner } from "react-icons/fa";
import toast from 'react-hot-toast';

const Feedback = () => {
    const [axiosSecure] = useAxios();
    const [loading, setLoading] = useState(false)

    const handleFeedbackForm=(event)=>{
        event.preventDefault();
        setLoading(true)
        const feedbackValue = event.target.feedback.value;
        const feedbackData= {
            feedback:feedbackValue
            // feedBackId: _id
        }
        console.log(feedbackData)
        axiosSecure.post(`/feedback`, feedbackData)
          .then(data => {
            console.log('after posting feedback', data.data)
            setLoading(false)
            if (data.data.insertedId) {
              toast.success("Feedback added successfully")
            // Swal.fire({
            //     title: "Success!",
            //     text: "Sell Service Added Successfully",
            //     icon: "success",
            //     confirmButtonText: "Cool",
            // });
            }
        })
        .catch((error) => {
            console.error('Error posting feedback:', error);
            setLoading(false);
            toast.error("Failed to add feedback");
        });
        // fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
        // method: "POST",
        // headers: { "content-type": "application/json" },
        // body: JSON.stringify(feedback),
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data);
        //     // 
        // });
    };


    return (
        <div>
            <BoardBanner
              img="https://melody-html.ancorathemes.com/images/bg2-Parallax.jpg"
              title="Give a Feedback"
              direction="Feedback"
          ></BoardBanner>
            <form
             onSubmit={handleFeedbackForm}
             className="flex justify-center items-center ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">You can give a feedback for the class Deny</span>
                    </label>

                    <textarea 
                    placeholder="Reason" 
                    name="feedback"
                    className="textarea textarea-accent  textarea-md w-[500px] h-[100px] block" >

                    </textarea>
                    <button 
                    className="mt-5 btn bg-primary border-0 text-textColor hover:bg-tertiary w-full" 
                    type="submit">
                        {loading ? (
                            <FaSpinner className='m-auto animate-spin' size={24} />
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;