import React from 'react';
import { toast } from 'react-toastify';

const Status = ({ progress, setResolved, resolved,setProgress,setProcessedTickets,processedTickets }) => {
    const handleResolved = (task) => {
        const newTasks = [...resolved, task]
        setResolved(newTasks)
        // console.log(progress);
        
        const remainingProgress = progress.filter(Task => Task.id !== task.id)
        setProgress(remainingProgress);
        const remainingProcessedTicket = processedTickets.filter(ticket => ticket.id !== task.id)
        setProcessedTickets(remainingProcessedTicket)
        toast("Your Task is Resolved")
    }
    console.log(resolved);
    return (
        <div className='space-y-4'>
            <div className="">
                <div className="">
                    <h3 className="text-2xl font-medium text-[#34485A] pb-2">Task Status</h3>
                    {/* <p className='text-xs'>Select a ticket to add to Task Status</p> */}
                </div>
                <div className="space-y-3">
                    {
                        progress.length === 0 ? <p className='text-xs'>Select a ticket to add to Task Status</p> :
                            progress.map(task => <div key={task.id} className="p-4 space-y-3 bg-white rounded-md">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    {task.title}
                                </h3>
                                <button onClick={() => handleResolved(task)} className='btn w-full bg-[#02A53B] text-white'>Complete</button>
                            </div>)
                    }
                </div>
            </div>
            <div className="">
                <div className="">
                    <h3 className="text-2xl font-medium text-[#34485A] pb-2">Resolved Task</h3>
                    {/* <p className='text-xs'>No resolved tasks yet.</p> */}
                </div>
                <div className="space-y-3">
                    {
                        resolved.length === 0 ? <p className='text-xs'>No resolved tasks yet.</p> :
                            resolved.map(task => <div key={task.id} className="p-4 space-y-3 bg-[#E0E7FF] rounded-md">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    {task.title}
                                </h3>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Status;