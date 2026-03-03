import { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ticketsPromise,setProgress, progress}) => {
    const ticketsData = use(ticketsPromise)
    // console.log(ticketsData);
    
    return (
        <div>
            <h3 className="text-2xl font-medium text-[#34485A]">Customer Tickets</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    ticketsData.map(ticket => <Ticket 
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