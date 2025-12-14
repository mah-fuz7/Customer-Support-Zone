import Task from "./Task";

export default function Tasks({clickTicket}){
    return(
       <div>
    <h1 className="mb-1  font-bold text-xl">Task Status</h1>

{
    clickTicket.map(task=><Task task={task}></Task>)
}
       </div>
    )
}
/*
 
*/