import ThemeProvider from "../../Components/ThemeProvider";
import PopularClass from "./PopularClass";
import PopularInstructors from "./PopularInstructors";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

const Home = () => {   
  
    return (
        <div className="">
            <Slider></Slider>
            <PopularClass></PopularClass>
            <Testimonial></Testimonial>
            <PopularInstructors></PopularInstructors>
            <ThemeProvider></ThemeProvider>
        </div>
    );
};

export default Home;