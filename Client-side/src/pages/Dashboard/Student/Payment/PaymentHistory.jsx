import { useContext, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import { AuthContext } from "../../../../providers/AuthProvider";


const PaymentHistory = () => {
  const {user}=useContext(AuthContext)
    const [payments, setPayments] = useState([]);
    const [axiosSecure]=useAxios()

  
    const fetchPaymentHistory = async () => {
      try {
        const response = await axiosSecure.get('/payments'); 
        setPayments(response.data.reverse()); 
      } catch (error) {
        console.error('Error fetching payment history:', error);
      }
    };

    fetchPaymentHistory();
  const filterPaymentByMail=payments.filter(payment=>user.email==payment.email)
  // console.log(payments)
    // console.log(filterPaymentByMail)
          return (
              <div className="flex items-center justify-center min-h-screen bg-gray-900">
              <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                  <table className="table text-gray-400 border-separate space-y-6 text-sm">
                    <thead className="bg-gray-800 text-gray-500">
                      <tr>
                        <th className="p-3">#</th>
                        <th className="p-3">Transaction ID</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Price</th>
                        <th className="p-3 text-left">Quantity</th>
                        <th className="p-3 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          filterPaymentByMail?.map((payment, index) =>
                          <tr className="bg-gray-800" key={payment._id}>
                              <td className="px-4 py-3 border text-center">{index + 1}</td>
                              <td className="p-3">
                                  <p className='text-lg'>{payment.transactionId}</p>
                              </td>
                              <td className="p-3">{payment.status}</td>
                              <td className="p-3">
                                  <span className="bg-cyan-400 text-black  rounded-md px-2">{payment.price} $</span>
                              </td>
                              <td className="p-3 ">{payment.quantity}</td>
                              <td className="p-3 ">{payment.date}</td>
                          </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    );
};

export default PaymentHistory;