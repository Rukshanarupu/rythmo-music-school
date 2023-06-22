import { useEffect, useState } from "react";
import SecondTitle from "../../Components/SecondTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './swiper.css'
import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/fa"
import { EffectCoverflow, Pagination } from "swiper";



const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    // console.log(instructors)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/musicDetails`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                const instructors = data.slice(0, 6);
                // console.log(instructors)
                setInstructors(instructors);
        });
    
    }, []);
    return (
        <div className="mb-20">
            <SecondTitle 
                subHeading={"The names we are proud of"}
                heading={"Meet Our Instructors"}
            ></SecondTitle>

            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            >
                {instructors?.map((instructor) => (
                    <SwiperSlide key={instructor.id}>
                    <div className="drop-shadow-2xl mb-10 ">
                        <div className="text-center mb-4">
                            <h3 className="text-3xl font-semibold">{instructor.instructor.name}</h3>
                            <h4 className="text-xl">Class Name: <span>{instructor.className}</span></h4>
                            <div className="flex justify-center mt-4">
                            <ul className="flex gap-5 text-yellow-600 text-2xl">
                                <a className=""><FaGoogle></FaGoogle> </a>
                                <a className=""><FaTwitter></FaTwitter> </a>
                                <a className=""><FaFacebook></FaFacebook> </a>
                            </ul>
                            </div>
                        </div>
                        <img className="" src={instructor.instructor.photo} alt={instructor.name} />
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopularInstructors;