import { Component } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  taskName = '';
  checkDescription = false;
  taskItem: string[] = [];
  taskItemCompleted: string[] = [];

  onDescriptionTask(event){
    if(event.target.value){
      this.checkDescription = true;
    }else{
      this.checkDescription = false;
    }
  }

  onCreateTask(){
    this.checkDescription = false;
    this.taskItem.push(this.taskName);
    this.taskName = '';
  }

  onDeleteTask(index){
    this.taskItem.splice(index, 1);
  }

  onTaskCompleted(index, event){
    this.taskItemCompleted.push(this.taskItem[index]);
    this.onEditTask(index, event);
    this.onDeleteTask(index);
  }

  onEditTask(index, event){
    this.taskItem[index] = event.target.textContent; 
  }
}
