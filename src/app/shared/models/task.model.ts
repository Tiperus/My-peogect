import {AddTask} from "../interface/task.user.interface"

export class Task implements AddTask {
constructor(
    
    public nameOfTask:string,
    public checkProgressTask:boolean

){}
}