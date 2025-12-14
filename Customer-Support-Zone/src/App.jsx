import React, { Suspense, useState } from 'react';
import Navbar from './assets/component/Navbar/navbar';
import Banner from './assets/component/Banner/banner';
import Tickets from './assets/component/TicketAndTask/Ticket/Tickets';
import Tasks from './assets/component/TicketAndTask/Task/Tasks';
import Resolved from './assets/component/Resolved/Resolved';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
 const fetchPromise=fetch('/ticket.json')
  .then(res=>res.json())
const App = () => {
 const [tickets,setTickets]=useState([])
  const [clickTicket,setClickTicket]=useState([])
const [taskSlove,setTaskSlove]=useState([])
 
  const removeTicket=(t)=>{
   const remainingCard=tickets.filter(tickets=>tickets.id !==t.id)
   setTickets(remainingCard)
  }
  const removeTask=(ts)=>{
const remainingTask=clickTicket.filter(taskData=>taskData.id !== ts.id)
setClickTicket(remainingTask)
setTaskSlove([...taskSlove,ts])
  }

  return (
    <div>
   <Navbar></Navbar>
<Banner clickTicket={clickTicket} taskSlove={taskSlove}></Banner>
  <div className='flex justify-start'>
    <h1 className='max-w-300 mx-auto text-2xl font-bold mb-2  ml-0 lg:pl-[12%] '>Customer Tickets</h1>

<div className='mr-[35%] lg:mr-[26%]'>
  <h1 className="mb-1  font-bold text-xl">Task Status</h1>
 

</div>
  </div>
<div className='flex w-full max-w-300 mx-auto gap-4  '>

<Suspense fallback={<p>loading..</p>}>

<Tickets tickets={tickets} setTickets={setTickets}  removeTicket={removeTicket} fetchPromise={fetchPromise} clickTicket={clickTicket} setClickTicket={setClickTicket} ></Tickets>
</Suspense>

<div>
  
<Suspense fallback={<p>task Loading...</p>}>
<Tasks   removeTask={removeTask} clickTicket={clickTicket}  ></Tasks>
</Suspense>
<hr />
<Suspense fallback={<p>loading..</p>}>
  <Resolved taskSlove={taskSlove}></Resolved>
</Suspense>

</div>
</div>
 <ToastContainer />
    </div>
  );
};

export default App;