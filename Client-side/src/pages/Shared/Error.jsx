
import { FaArrowLeft } from "react-icons/fa";
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const { error, status } = useRouteError()
    return (
          <section className="min-w-screen min-h-screen bg-blue-100 flex items-center p-3 lg:p-20 overflow-hidden relative">
    {/*      <section className=""> */}
          <div className="md:flex justify-between min-h-full min-w-full rounded-3xl bg-white shadow-xl p-5 lg:p-10 text-gray-800 relative items-center text-center md:text-left">
              <div className="">
                  <div className=" text-gray-600 font-light">
                        <img className="w-[300px]" src="https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/404.gif" alt="" />
                      <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seems to be lost!</h1>
                      <p>The page you are looking for is not available.</p>
                      <p>Try searching again or use the Go Back button below.</p>
                  </div>
                  <p className='text-2xl font-semibold md:text-2xl text-rose-800 md:my-8'>
                    {error?.message}
                  </p>

                  <div className="mb-20 md:mb-0">
                      <Link to='/' className=' my-navbar-btn flex items-center '>
                        <FaArrowLeft className="mr-1"></FaArrowLeft> Go Back to homepage
                      </Link>
                  </div>
              </div>
              <div className="text-center">
                <img src="https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/Capture.JPG" alt="" />
                <p className="text-xs text-gray-300"><span className="text-primary">{status}</span> page created by Rupu</p>
              </div>
          </div>
          <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
          <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
      </section>
    )
};

export default Error;