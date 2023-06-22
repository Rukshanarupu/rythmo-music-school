import usePayments from "../../../Hooks/usePayments";


const EnrolledClass = () => {
  const [payments]=usePayments()
  console.log(payments)
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="col-span-12">
          <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-400 border-separate space-y-6 text-sm">
              <thead className="bg-gray-800 text-gray-500">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Class Name</th>
                  <th className="p-3 text-left">Instructor</th>
                  <th className="p-3 text-left">Schedule</th>
                  <th className="p-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                {
                    payments?.map((paymentItem, index) =>
                    <tr className="bg-gray-800" key={paymentItem._id}>
                        <td className="px-4 py-3 border text-center">{index + 1}</td>
                        <td className="p-3">
                            <p className='text-lg'>{paymentItem.classNames[0]}</p>
                            <p className='text-lg'>{paymentItem.classNames[1]?paymentItem.classNames[1]:""}</p>
                            <p className='text-lg'>{paymentItem.classNames[2]? paymentItem.classNames[2]:""}</p>
                        </td>
                        <td className="p-3">
                            <p className=''>{paymentItem.instructor[0]}</p>
                            <p className=''>{paymentItem.instructor[1]?paymentItem.instructor[1]:""}</p>
                            <p className=''>{paymentItem.instructor[2]? paymentItem.instructor[2]:""}</p>
                        </td>
                        <td className="p-3">
                          <span className="bg-cyan-400 text-gray-50 rounded-md px-2">
                            {paymentItem.schedule[0]}
                          </span><br />
                          <span className="bg-cyan-400 text-gray-50 rounded-md px-2">
                            {paymentItem.schedule[1]?paymentItem.schedule[1]:""}
                          </span><br />
                          <span className="bg-cyan-400 text-gray-50 rounded-md px-2">
                            {paymentItem.schedule[2]?paymentItem.schedule[2]:""}
                          </span>
                        
                        </td>
                        <td className="p-3 ">
                          <p className=''>{paymentItem.duration[0]}</p>
                          <p className=''>{paymentItem.duration[1]?paymentItem.duration[1]:""}</p>
                          <p className=''>{paymentItem.duration[2]?paymentItem.duration[2]:""}</p>
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default EnrolledClass;