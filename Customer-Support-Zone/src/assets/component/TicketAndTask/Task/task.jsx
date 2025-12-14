export default function Task(task){
    console.log(task.task)
    const{title}=task.task
    return(
        <div className="">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4 px-2  ">
                  <h1 className="">{title}</h1>
                  <button className="btn w-full mt-1.5 bg-green-600 text-white"> complete</button>
            </div>
        </div>
    )
}