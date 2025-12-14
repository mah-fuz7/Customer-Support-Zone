import Task from "./Task";

export default function Tasks({clickTicket,removeTask}){
  
    return(
       <div>
    
{
    clickTicket.map(task=><Task  removeTask={removeTask} task={task}></Task>)
}
       </div>
    )
}
