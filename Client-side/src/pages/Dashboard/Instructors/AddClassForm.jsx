import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import BoardBanner from "../../../Components/BoardBanner";
import { FaSpinner } from "react-icons/fa";
import useAxios from "../../../Hooks/useAxios";


const AddClassForm = () => {
  const [axiosSecure] = useAxios();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

  const handleClassSubmit=(event)=>{
    event.preventDefault();
    setLoading(true)
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const className = form.className.value;
    const image = form.image.files[0]
    const price = parseFloat(form.price.value);
    const availableSeats = parseInt(form.seat.value);
    const schedule=form.schedule.value;
    const duration=form.duration.value;
  
    const formData = new FormData();
    formData.append('image', image)
    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if(imgResponse.success){
          const imgURL = imgResponse.data.display_url;
          const classData = {
            instructorName: name,
            instructorMail: email,
            classImage: imgURL,
            className: className,
            price: price,
            availableSeats: availableSeats,
            status: 'pending',
            schedule: schedule,
            duration:duration
          };
          // console.log(classData);
          axiosSecure.post('/postClass', classData)
          .then(data => {
            console.log('after posting new class', data.data)
            setUploadButtonText('Uploaded!')
            setLoading(false)
            if (data.data.classId) {
              Swal.fire({
                title: "Success!",
                text: "Class Added Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          })
      }
    })
  } 

  const handleUploadImage = image => {
    // console.log(image)
    setUploadButtonText(image.name)
  }
    return (
        <div className="container mx-auto">
          <BoardBanner
              img="https://melody-html.ancorathemes.com/images/bg2-Parallax.jpg"
              title="Add a Class please!"
              direction="Add Class"
          ></BoardBanner>
          <form onSubmit={handleClassSubmit} className="m-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Instructor Name</span>
                </label>
                <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Instructor Email</span>
                </label>
                <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Class Name</span>
                </label>
                <input type="text" placeholder="Name of your Class" name="className" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Class Image</span>
                </label>
                <label>
                  <input
                    onChange={event => {
                      handleUploadImage(event.target.files[0])
                    }}
                    className='text-sm cursor-pointer w-36 hidden' type='file' name='image' id='image' accept='image/*' hidden
                  />
                  <div className='text-gray-400 border border-gray-300 rounded-lg cursor-pointer p-2.5'>
                    {uploadButtonText}
                  </div>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Available Seats</span>
                </label>
                <input type="number" name="seat" placeholder="Quantity" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input type="number" name="price" placeholder="Price in Dollar" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Class Schedule</span>
                </label>
                <input type="text" name="schedule" placeholder="give your available days" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Class Duration</span>
                </label>
                <input type="text" name="duration" placeholder="Class duration time" className="input input-bordered"/>
              </div>
            </div>
            <div className="form-control mt-10">
              <button className="btn hover:text-white bg-primary hover:bg-tertiary border-0 text-black" type="submit" value="Confirm">
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

export default AddClassForm;