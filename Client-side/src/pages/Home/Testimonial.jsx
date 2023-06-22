import '../../Components/Common.css'


const Testimonial = () => {
    return (
        <div className='bg-fixed testimonial-bg p-10 my-20'>
            <div className="container mx-auto">
                <div className="heading text-center text-textColor">
                    <p className="text-primary font-semibold"> TESTIMONIAL </p>
                    <h2 className="text-lg md:text-4xl uppercase mt-2 font-rufina font-bold text-white">What Our Parents Say</h2>
                </div>
                <div className="grid md:grid-cols-2 items-center">
                    <div>
                        <img src="https://i.ibb.co/0GYNdpm/testimonial-banner.png" alt="" />
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs bg-primary hover:bg-yellow-600 border-0">1</a> 
                            <a href="#item2" className="btn btn-xs bg-primary hover:bg-yellow-600 border-0">2</a> 
                            <a href="#item3" className="btn btn-xs bg-primary hover:bg-yellow-600 border-0">3</a> 
                        </div>
                    </div>
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full grid md:grid-cols-2 items-center gap-3 md:gap-0">
                            <div className="h-[400px] relative z-[1] rounded-lg bg-[hsla(0,0%,100%,0.55)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                                    Anna Doe
                                </h2>
                                <p className="mb-4 font-semibold">Graphic designer</p>
                                <p className="mb-6  dark:text-neutral-300">
                                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                                    neque iaculis malesuada. Aenean gravida magna orci
                                    Ad, at blanditiis quaerat laborum officia incidunt
                                    cupiditate dignissimos voluptates eius aliquid minus
                                </p>

                                {/* review by star */}
                                <ul className="flex justify-center lg:justify-start">
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <img src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/PCXJHSB.jpg"
                                className="md:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div>
                        </div> 
                        <div id="item2" className="carousel-item w-full grid md:grid-cols-2 items-center gap-3 md:gap-0">
                            <div className="h-[400px] relative z-[1] rounded-lg bg-[hsla(0,0%,100%,0.55)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                                    Dave Beech
                                </h2>
                                <p className="mb-4 font-semibold">Manager / Parent</p>
                                <p className="mb-6 dark:text-neutral-300">
                                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                                    neque iaculis malesuada. Ad, at blanditiis quaerat laborum officia incidunt
                                    cupiditate dignissimos voluptates eius aliquid minus
                                </p>

                                {/* review by star */}
                                <ul className="flex justify-center lg:justify-start">
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <img src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/3PQNVSH.jpg"
                                className="md:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div>
                        </div> 
                        <div id="item3" className="carousel-item w-full grid md:grid-cols-2 items-center gap-3 md:gap-0">
                            
                            <div className="h-[400px] relative z-[1] rounded-lg bg-[hsla(0,0%,100%,0.55)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                                    Diana Jones
                                </h2>
                                <p className="mb-4 font-semibold">Entrepreneur / Parent</p>
                                <p className="mb-6 dark:text-neutral-300">
                                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                                    neque iaculis malesuada. Aenean gravida magna orci, non
                                    efficitur quaerat laborum officia incidunt
                                    cupiditate dignissimos voluptates eius aliquid minus
                                </p>

                                {/* review by star */}
                                <ul className="flex justify-center lg:justify-start">
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                                        className="w-5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <img src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/E4Z6KX9.jpg"
                                className="md:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Testimonial;