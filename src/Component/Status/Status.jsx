import React from 'react';

const Status = () => {
    return (
        <div className='space-y-4'>
            <div className="">
                <h3 className="text-2xl font-medium text-[#34485A]">Task Status</h3>
            <p className='text-xs'>Select a ticket to add to Task Status</p>
            </div>
            <div className="">
                <h3 className="text-2xl font-medium text-[#34485A]">Resolved Task</h3>
            <p className='text-xs'>No resolved tasks yet.</p>
            </div>
        </div>
    );
};

export default Status;