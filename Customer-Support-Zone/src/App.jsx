import React, { Suspense, useState } from 'react';
import Navbar from './assets/component/Navbar/navbar';
import Banner from './assets/component/Banner/banner';
import Tickets from './assets/component/TicketAndTask/Ticket/Tickets';
import Tasks from './assets/component/TicketAndTask/Task/Tasks';
 const fetchPromise=fetch('/ticket.json')
  .then(res=>res.json())
const App = () => {
 const [tickets,setTickets]=useState([])
  const [clickTicket,setClickTicket]=useState([])
  
  
  
  const removeTicket=(t)=>{
  const remaining= tickets.filter(tickets=>tickets.id !==t.id)
   setTickets(remaining)
  }

  return (
    <div>
   <Navbar></Navbar>
<Banner></Banner>
  <h1 className='max-w-300 mx-auto text-2xl font-bold mb-2 '>Customer Tickets</h1>

<div className='flex w-full max-w-300 mx-auto gap-4  '>
<Suspense fallback={<p>loading..</p>}>

<Tickets tickets={tickets} setTickets={setTickets}   removeTicket={removeTicket} fetchPromise={fetchPromise} clickTicket={clickTicket} setClickTicket={setClickTicket} ></Tickets>
</Suspense>

<Suspense fallback={<p>task Loading...</p>}>
<Tasks clickTicket={clickTicket}  ></Tasks>
</Suspense>
</div>
    </div>
  );
};

export default App;