// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-my-learn-plan',
//   templateUrl: './my-learn-plan.component.html',
//   styleUrls: ['./my-learn-plan.component.scss']
// })
// export class MyLearnPlanComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {AddTask} from "./../../shared/interface/task.user.interface";
import {Task} from "./../../shared/models/task.model";



@Component({
  selector: 'app-my-learn-plan',
  templateUrl: './my-learn-plan.component.html',
  styleUrls: ['./my-learn-plan.component.scss']
})
export class MyLearnPlanComponent implements OnInit {
  userData:string;
  arrUserLength:number;
  arrTask:Array<Task>;
  openEdin:boolean;
  nOfTask:string;
  cProgressTask:boolean;
  indexForEdit:number;

  constructor() { }

  ngOnInit(): void {
    this.arrTask=[{ nameOfTask:'html', checkProgressTask:true}]
    this.arrUserLength=this.arrTask.length
    
  }
addTask ():void{
let variableUserTask:AddTask= new Task(this.nOfTask, this.cProgressTask)
this.arrTask.push(variableUserTask)
this.arrUserLength=this.arrTask.length-1
}
checkbox (index):void{
  this.cProgressTask=this.arrTask[index].checkProgressTask
}

editTask (index):void{
  this.openEdin=true;
  this.nOfTask=this.arrTask[index].nameOfTask;
  this.indexForEdit=index;

}
saveEditTask(index):void{
  this.arrTask[index].nameOfTask=this.nOfTask;
  this.openEdin=false;
}
deleteTask(index:number):void{
  this.arrTask.splice(index,1)
  
}

}

