import { useEffect, useState } from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import FirstTitle from "../../Components/FirstTitle";
import { Link } from "react-router-dom";

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/musicDetails`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                /* Sort classes based on the number of students in descending order*/
                const sortedClasses = data.sort((a, b) => b.studentsNum - a.studentsNum);
                /* Select the top 6 classes*/
                const topClasses = sortedClasses.slice(0, 6);
                // console.log(topClasses)
                setClasses(topClasses);
        });
    
    }, []);

    return (
        <div className="container mx-auto my-10">
            <FirstTitle 
                subHeading={"Music Classes"}
                heading={"EXPLORE OUR MUSIC CLASSES"}
            ></FirstTitle>
            <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="">
            <div className="grid md:grid-cols-3 gap-3">
                {classes?.map((classItem) => (
                <div key={classItem._id} className="bg-gray-100 p-3">
                    <div className="p-3 h-[300px] md:h-[250px] card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className="" src={classItem.icon} alt={classItem.className}/></figure>
                        <div className="card-body md:flex-row md:justify-between items-center">
                            <div>
                                <h2 className="card-title text-lg md:text-2xl">{classItem.className}</h2>
                                <p>Number of Students: <span className="font-bold text-orange-600">{classItem.studentsNum}</span></p>
                                <p className="text-primary">{classItem.sDetails}</p>
                            </div>
                            <div className="card-actions">
                                <Link to="/" className="my-btn">See details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </motion.div>
        </div>
    );
};

export default PopularClass;