import { toast } from "react-toastify"

export default function Task({task,removeTask}){
    const{title}=task
const handleClick=()=>{
   
    removeTask(task)
     toast('Task Resolve')
}
    return(
        <div className="">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4 px-2  ">
                  <h1 className="">{title}</h1>
                  <button onClick={()=>{handleClick()}} className="btn w-full mt-1.5 bg-green-600 text-white"> complete</button>
            </div>
     
        </div>
    )
}