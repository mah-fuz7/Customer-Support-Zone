export default function TaskResolved({task}){
    const{title}=task
    return(
        <div className="p-2 border-2 border-transparent rounded-xl my-2 bg-blue-50">
       <h1>{title}</h1>
        </div>
    )
}