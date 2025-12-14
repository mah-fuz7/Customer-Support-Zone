export default function Ticket({tickets ,removeTicket,clickTicket,setClickTicket}){
    const {id, title,description,customer,priority,status,createdAt}=tickets
    const handleClick=()=>{
      removeTicket(tickets)
      setClickTicket([...clickTicket ,tickets])
     
    }
    return(
        <div onClick={()=>handleClick()}>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4 max-w-sm border border-gray-200 border-l-4 ">
      
      <div className="flex justify-between items-start mb-2">
        
        <h3 className="text-base font-semibold text-gray-900 pr-4">
          {title}
        </h3>

        <span className={`flex items-center whitespace-nowrap px-2 py-1 rounded-full text-xs font-medium `}>
          <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
          {status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
{description}      </p>

      <div className="flex justify-between items-center text-xs text-gray-500">
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">{id}</span>
          <span className={`font-bold  tracking-wider`}>
           { priority}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <span>{customer}</span>
          
          <span className="flex items-center">
            📅
            <span className="ml-1">{createdAt}</span>
          </span>
        </div>
      </div>
    </div>
        </div>
    )
}