import {FaLongArrowAltRight} from 'react-icons/fa'
import './Common.css'

const BoardBanner = ({ img, title, direction }) => {
    return (
        <div className="font-rufina mb-10 bg-fixed flex justify-center banner opacity-90 h-[300px]" style={{backgroundImage: `url(${img})`}}>  
           <div className='relative'>
                <div className="absolute -bottom-7 -right-[290px] w-[600px] p-10 rounded-xl bg-white text-center flex justify-center">
                        <div className="">
                            <h1 className="text-4xl mb-3 font-bold uppercase">{title}</h1>
                            <p className="flex gap-2 items-center text-primary text-xl">Home <FaLongArrowAltRight></FaLongArrowAltRight>Dashboard <FaLongArrowAltRight></FaLongArrowAltRight> <span className='text-black'>{direction}</span></p>
                        </div>
                    </div>
                </div> 
        </div>

    );
};

export default BoardBanner;