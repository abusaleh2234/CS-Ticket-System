// import { use, useState } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({processedTickets,setProgress, progress}) => {
    // const ticketsData = use(ticketsPromise)
    // console.log(ticketsData);
    
    
    return (
        <div className="w-full md:min-w-2/3">
            <h3 className="text-xl md:text-2xl  font-medium text-[#34485A] pb-4">Customer Tickets</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    processedTickets.length === 0 ? <p className='text-xs'>All Task Resolved </p> :
                    processedTickets.map(ticket => <Ticket 
                        key={ticket.id} 
                        setProgress={setProgress}
                        progress={progress}
                        ticket={ticket}></Ticket>)
                }
            </div>
        </div>
    );
};

export default Tickets;