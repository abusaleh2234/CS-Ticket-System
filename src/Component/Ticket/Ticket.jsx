import React from 'react';
import { toast } from 'react-toastify';

const Ticket = ({ticket,setProgress,progress}) => {
    // console.log(ticket);
    const { title,status,priority,id,description,customer,createdAt} = ticket

    const handleProgressStatus = () => {
        // const newStatus = "In Progress"
        // const progressTicket = {title,newStatus,priority,id,description,customer,createdAt}
        const newProgress = [...progress,ticket]
        setProgress(newProgress)
        toast("Ticket In Progress")
    }
    return (
        <div className='cursor-pointer' onClick={()=>handleProgressStatus()}>


                    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">

                        <div className="flex justify-between items-start">
                            <h3 className="text-sm font-semibold text-gray-800">
                               {title}
                            </h3>
                            {status ==="Open" &&
                            <span className="flex items-center gap-1 bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {status}
                            </span> || 
                            status ==="In Progress" &&
                            <span className="flex items-center gap-1 bg-[#F8F3B9] text-[#9C7700] text-xs font-medium px-3 py-1 rounded-full">
                                <span className="w-2 h-2 bg-[#FEBB0C] rounded-full"></span>
                                {status}
                            </span>}
                            
                        </div>

                        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex justify-between items-center mt-4 text-xs">

                            <div className="flex items-center gap-3">
                                <span className="text-gray-400">#{id}</span>
                                {priority ==="High" && 
                                <span className="text-red-500 font-semibold uppercase">
                                    {priority} Priority
                                </span> || priority ==="Medium" && <span className="text-[#FEBB0C] font-semibold uppercase">
                                    {priority} Priority
                                </span> || priority ==="Low" && <span className="text-green-600 font-semibold uppercase">
                                    {priority} Priority
                                </span>}
                                
                            </div>

                            <div className="flex items-center gap-3 text-gray-500">
                                <span>{customer}</span>
                                <span>{createdAt}</span>
                            </div>

                        </div>
                    </div>


                </div>

    );
};

export default Ticket;