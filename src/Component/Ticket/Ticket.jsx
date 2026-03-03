import React from 'react';

const Ticket = ({ticket}) => {
    console.log(ticket);
    
    return (
        <div>
            {/* <div className="bg-gray-100 min-h-screen p-6">
                <div className="grid md:grid-cols-2 gap-6"> */}

                    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300">

                        <div className="flex justify-between items-start">
                            <h3 className="text-sm font-semibold text-gray-800">
                                Login Issues - Can't Access Account
                            </h3>
                            <span className="flex items-center gap-1 bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Open
                            </span>
                        </div>

                        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                            Customer is unable to log in to their account. They've tried resetting their password multiple times but still...
                        </p>

                        <div className="flex justify-between items-center mt-4 text-xs">

                            <div className="flex items-center gap-3">
                                <span className="text-gray-400">#1001</span>
                                <span className="text-red-500 font-semibold uppercase">
                                    High Priority
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-500">
                                <span>John Smith</span>
                                <span>11/15/2024</span>
                            </div>

                        </div>
                    </div>


                </div>
        //     </div>
        // </div>
    );
};

export default Ticket;