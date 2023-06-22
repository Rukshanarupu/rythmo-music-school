
import './Test.css'

const Test = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="col-span-12">
          <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-400 border-separate space-y-6 text-sm">
              <thead className="bg-gray-800 text-gray-500">
                <tr>
                  <th className="p-3">Class Name</th>
                  <th className="p-3 text-left">Instructor</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Schedule</th>
                  <th className="p-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800">
                  <td className="p-3">
                    <div className="flex align-items-center">
                      <p className='text-lg'>className</p>
                    </div>
                  </td>
                  <td className="p-3">Technology</td>
                  <td className="p-3 font-bold">200.00$</td>
                  <td className="p-3">
                    <span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                  </td>
                  <td className="p-3 ">
                    <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                      <i className="material-icons-outlined text-base">visibility</i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                      <i className="material-icons-outlined text-base">edit</i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                      <i className="material-icons-round text-base">delete_outline</i>
                    </a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>



    );
};

export default Test;

// <section className="container mx-auto p-6 font-mono">
//   <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
//     <div className="w-full overflow-x-auto">
//       <table className="w-full">
//         <thead>
//           <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
//             <th className="px-4 py-3">Name</th>
//             <th className="px-4 py-3">Age</th>
//             <th className="px-4 py-3">Status</th>
//             <th className="px-4 py-3">Date</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white">
//           <tr className="text-gray-700">
//             <td className="px-4 py-3 border">
//               <div className="flex items-center text-sm">
//                 <div className="relative w-8 h-8 mr-3 rounded-full md:block">
//                   <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
//                   <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-black">Sufyan</p>
//                   <p className="text-xs text-gray-600">Developer</p>
//                 </div>
//               </div>
//             </td>
//             <td className="px-4 py-3 text-ms font-semibold border">22</td>
//             <td className="px-4 py-3 text-xs border">
//               <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
//             </td>
//             <td className="px-4 py-3 text-sm border">6/4/2000</td>
//           </tr>
//           <tr className="text-gray-700">
//             <td className="px-4 py-3 border">
//               <div className="flex items-center text-sm">
//                 <div className="relative w-8 h-8 mr-3 rounded-full">
//                   <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
//                   <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-black">Stevens</p>
//                   <p className="text-xs text-gray-600">Programmer</p>
//                 </div>
//               </div>
//             </td>
//             <td className="px-4 py-3 text-md font-semibold border">27</td>
//             <td className="px-4 py-3 text-xs border">
//               <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
//             </td>
//             <td className="px-4 py-3 text-sm border">6/10/2020</td>
//           </tr>
         
//         </tbody>
//       </table>
//     </div>
//   </div>
// </section>