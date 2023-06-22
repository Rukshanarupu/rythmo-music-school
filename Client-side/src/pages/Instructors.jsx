import Banner from "../Components/Banner";
import useMusic from "../Hooks/useMusic";

const Instructors = () => {
    const [musicDetails]=useMusic()
    // console.log(musicDetails)

    return (
        <div>
            <Banner
                img="https://melody-html.ancorathemes.com/images/bg1-Parallax.jpg"
                title="Our Instructors"
                direction="Instructor"
            ></Banner>
                
            <div className="container mx-auto overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Taken Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            musicDetails?.map((item, index) =>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.className}</td>
                                <td>{item.instructor.name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.instructor.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">{item.instructor.email}</td>
                                <td className="text-center">{item.instructor.numClassesTaken}</td>
                                <td>
                                    {/* TODO: see class btn need to active */}
                                    <button className="btn bg-tertiary border-0 hover:bg-cyan-700">See Class</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;