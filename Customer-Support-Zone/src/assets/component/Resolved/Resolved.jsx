import TaskResolved from "./taskResolved"

export default function Resolved({taskSlove}){
    return(
        <div>
             <h1 className="mb-1  font-bold text-xl">Resolve Status</h1>
            {
                taskSlove.map(task=><TaskResolved task={task}></TaskResolved>)
            }
        </div>
    )
}