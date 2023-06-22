import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const Slider = () => {
    return (
        <div className='pt-20 md:pt-0'>
            <Carousel>
            <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="">
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>WELCOME TO MUSICINE</p>
                    <h1 className='text-xl md:text-7xl my-4 font-bold'>Learning Music With Easy Way</h1>
                    <a href='#' className='my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider1.jpg' />
            </div>
            </motion.div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl'>Best places for</p>
                    <h1 className='text-xl md:text-7xl my-4 font-bold'>Music education</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider2.jpg' />
            </div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>If music is your world</p>
                    <h1 className='text-xl md:text-7xl my-4 font-bold'>Do not miss the chance</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider3.jpg' />
            </div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>Music for everyone</p>
                    <h1 className='text-xl md:text-7xl  my-4 font-bold'>Start with a note</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider1.jpg' />
            </div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>Best places for</p>
                    <h1 className='text-xl md:text-7xl  my-4 font-bold'>Music education</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider2.jpg' />
            </div>
        </Carousel>
        </div>
    );
};

export default Slider;