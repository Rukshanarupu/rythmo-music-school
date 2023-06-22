import Banner from "../../Components/Banner";
import FirstTitle from "../../Components/FirstTitle";
import SecondTitle from "../../Components/SecondTitle";
import useClass from "../../Hooks/useClass";
import ClassDetails from "./ClassDetails";


const ClassList = () => {
    const [postClass] = useClass();
    // const { user } = useContext(AuthContext);
    const filteredClasses = postClass.filter(
        (classItem) => classItem.status === "approved"
    ); 

    // console.log(filteredClasses)
    return (
        <div className="font-zilla">
            <Banner
                img="https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/background.jpg"
                title="Our Classes"
                direction="Class"
            ></Banner>
            
            <div className="container mx-auto">
                <div>
                    <SecondTitle 
                        subHeading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        heading={"Our Music Class"}
                    ></SecondTitle>
                    <div className="grid md:grid-cols-2 md:gap-5 lg:gap-10">
                        {
                            filteredClasses?.map(classItem => 
                            <ClassDetails
                                key={classItem._id}
                                classItem={classItem}
                            ></ClassDetails>)
                        }
                    </div>
                </div>


                {/* Learning process */}
                <div className="my-10">
                    <FirstTitle 
                        subHeading={"HOW ITS WORK"}
                        heading={"Our Learning Process"}
                    ></FirstTitle>
                    <div className="grid md:grid-cols-4 gap-10 mt-20">
                        <div>
                            <h1 className="text-3xl font-bold mb-5"><span className="bg-primary rounded-lg py-2 px-4">1</span></h1>
                            <h2 className="text-3xl font-semibold my-2 text-textColor">Choose Your Class You Want</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga delectus sit, numquam ipsum similique, nisi blanditiis dignissimos iste!</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-5"><span className="bg-primary rounded-lg py-2 px-4">2</span></h1>
                            <h2 className="text-3xl font-semibold my-2 text-textColor">Fill Registration Form</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. minus officia nobis! Repellendus vel quod ducimus ratione saepe impedit sunt laboriosam modi!</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-5"><span className="bg-primary rounded-lg py-2 px-4">3</span></h1>
                            <h2 className="text-3xl font-semibold my-2 text-textColor">Pay Registration Fee</h2>
                            <p>Delectus sit, numquam ipsum similique, nisi blanditiis dignissimos iste minus officia nobis! Repellendus vel quod ducimus ratione saepe impedit sunt laboriosam modi!</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-5"><span className="bg-primary rounded-lg py-2 px-4">4</span></h1>
                            <h2 className="text-3xl font-semibold my-2 text-textColor">Start Learning With Us</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga delectus sit vel quod ducimus ratione saepe impedit sunt laboriosam modi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassList;