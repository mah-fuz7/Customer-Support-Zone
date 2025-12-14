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
   const remainingCard=tickets.filter(tickets=>tickets.id !==t.id)
   setTickets(remainingCard)
  }
  const removeTask=(ts)=>{
const remainingTask=clickTicket.filter(taskData=>taskData.id !== ts.id)
setClickTicket(remainingTask)
  }

  return (
    <div>
   <Navbar></Navbar>
<Banner></Banner>
  <div className='flex justify-start'>
    <h1 className='max-w-300 mx-auto text-2xl font-bold mb-2  ml-0 '>Customer Tickets</h1>
<div className='mr-[25%]'>
  <h1 className="mb-1  font-bold text-xl">Task Status</h1>
  <h1 className="mb-1  font-bold text-xl">Resolve Status</h1>

</div>
  </div>
<div className='flex w-full max-w-300 mx-auto gap-4  '>
<Suspense fallback={<p>loading..</p>}>

<Tickets tickets={tickets} setTickets={setTickets}  removeTicket={removeTicket} fetchPromise={fetchPromise} clickTicket={clickTicket} setClickTicket={setClickTicket} ></Tickets>
</Suspense>

<Suspense fallback={<p>task Loading...</p>}>
<Tasks   removeTask={removeTask} clickTicket={clickTicket}  ></Tasks>
</Suspense>
</div>
    </div>
  );
};

export default App;