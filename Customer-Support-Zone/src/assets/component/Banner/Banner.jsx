import React from 'react';
import bgimg1 from '../../../../public/img/vector1.png'
const Banner = ({clickTicket ,taskSlove}) => {
    return (
        <div  className='flex justify-between max-w-[1200px] mx-auto my-10'>

<div
  className="relative h-72 w-1/2 p-8 rounded-xl text-white text-center 
              bg-blend-overlay  overflow-hidden mr-4"
  style={{
   
      backgroundImage: `
      linear-gradient(to top, #de6fe4a0, #8F54EE),
      url(${bgimg1})
    `,
    backgroundRepeat: "repeat-x",
    backgroundPosition: "left",
    backgroundSize: "fit",
  }}
>
 <div className='mt-[10%]'>
     <h2 className="text-lg font-medium items-center">In-Progress</h2>
  <p className="text-4xl font-bold mt-">{clickTicket.length}</p>
 </div>
</div>


<div
  className="relative h-72 w-1/2 p-8 rounded-xl text-white text-center 
              bg-blend-overlay  overflow-hidden z-10"
  style={{
    
      backgroundImage: `
      linear-gradient(to left, #00827A,#5DD270),
      url(${bgimg1})
    `,
    backgroundRepeat: "repeat-x",
    backgroundPosition: "left",
    backgroundSize: "fit",
  }}
>
 <div className='mt-[10%]'>
     <h2 className="text-lg font-medium items-center">Resolved</h2>
  <p className="text-4xl font-bold mt-">{taskSlove.length}</p>
 </div>
</div>
           
        </div>
    );
};

export default Banner