// import { Parallax } from 'react-parallax';
import {FaLongArrowAltRight} from 'react-icons/fa'
import './Common.css'

const Banner = ({ img, title, direction }) => {
    return (
        <div className="font-rufina mb-10 bg-fixed flex justify-center banner opacity-90 h-[300px] pt-[60px]" style={{backgroundImage: `url(${img})`}}>  
           <div className='relative'>
                <div className="absolute -bottom-7 -right-[220px] w-[500px] p-10 rounded-xl bg-white text-center flex justify-center">
                        <div className="">
                            <h1 className="text-4xl font-bold uppercase">{title}</h1>
                            <p className="flex gap-2 items-center text-primary text-xl">Home <span><FaLongArrowAltRight></FaLongArrowAltRight></span> {direction}</p>
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default Banner;