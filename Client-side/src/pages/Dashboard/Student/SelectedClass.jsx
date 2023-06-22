import Swal from "sweetalert2";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";

    
const SelectedClass = () => {
    const [selectClass, refetch]=useSelectedClass()
    console.log(selectClass)
    const totalPrice = selectClass.reduce((sum, item) => item.price + sum, 0);

    const handleDeleteClass=(selectedItem)=>{
        fetch(`${import.meta.env.VITE_API_URL}/selectClass/${selectedItem._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class deleted successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    
    return (
        <div>
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <h3 className="text-xl "><span className="text-primary">Total Price:</span> <span>{totalPrice} $</span></h3>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3 text-center">#</th>
                                <th className="px-4 py-3">Class Name</th>
                                <th className="px-4 py-3">Available Seat</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">Payment</th>
                                <th className="px-4 py-3 border-0">Delete</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {
                                selectClass?.map((selectedItem, index) =>
                                <tr className="text-gray-700" key={selectedItem._id}>
                                    <td className="px-4 py-3 border text-center">{index + 1}</td>
                                    <td className="px-4 py-3 border">
                                        <p className="font-semibold text-black">{selectedItem.className}</p>
                                    </td>
                                    <td className="px-4 py-3 text-ms font-semibold border">{selectedItem.availableSeats}</td>
                                    <td className="px-4 py-3 text-sm border">{selectedItem.price} $</td>
                                    <td className="px-4 py-3 text-xs border">
                                        <Link 
                                        to="/dashboard/payment"
                                        className="btn border-0 hover:bg-tertiary hover:text-white px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> 
                                            Pay 
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3 text-sm border">
                                        <button 
                                        className="btn-sm bg-primary rounded hover:bg-tertiary font-semibold text-textColor"
                                        onClick={() => handleDeleteClass(selectedItem)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                            
                            </tbody>
                        </table>
                    </div>
                </div>
                </section>
        </div>
    );
};

export default SelectedClass;