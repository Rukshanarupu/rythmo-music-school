

const FirstTitle = ({heading, subHeading}) => {
    return (
        <div className=" text-center text-textColor">
            <p className="text-primary font-semibold"> {subHeading} </p>
            <h2 className="text-lg md:text-4xl uppercase my-2 font-rufina font-bold">{heading}</h2>
            
        </div>
        
        // <FirstTitle 
            // subHeading={"OUR TEACHERS"}
            // heading={"Meet Our Instructor"}
        // ></FirstTitle>
    );
};

export default FirstTitle;