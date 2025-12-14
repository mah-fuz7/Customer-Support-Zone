import { use, useEffect } from "react";
import Ticket from "./Ticket";
export default function Tickets({fetchPromise, removeTicket,clickTicket,setClickTicket,tickets,setTickets }){
   const ticketsData=use(fetchPromise)
useEffect(()=>{
    setTickets(ticketsData)
},[])
    return(
        <div className=" gap-4 w-[50%] lg:w-[70%] ">

            <div className="mx-w-[1200px] mx-auto px-5   w-full md:w-full grid grid-cols-1 md:grid-cols-2 ">

                {
                  tickets.map(tickets=><Ticket removeTicket={removeTicket} tickets={tickets} clickTicket={clickTicket} setClickTicket={setClickTicket}></Ticket>)
                }
            </div>
              


        </div>
    )
}