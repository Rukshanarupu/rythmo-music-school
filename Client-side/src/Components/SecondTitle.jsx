import './Common.css'

const SecondTitle = ({heading, subHeading}) => {
    return (
        <div className=" text-center text-textColor">
        <h2 className="text-4xl uppercase my-2 font-rufina font-bold">{heading}</h2>
            <p className="text-primary font-semibold"> {subHeading} </p>
        </div>
        
        // <SecondTitle 
            // subHeading={"OUR TEACHERS"}
            // heading={"Meet Our Instructor"}
        // ></SecondTitle>
    );
};

export default SecondTitle;