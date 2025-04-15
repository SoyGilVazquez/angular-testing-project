import id from '@angular/common/locales/id';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {



  tasks: string[] = [];
  reloadactividad: any;
p: any;

  constructor() {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {

    
      this.reloadactividad.emit();
    
    console.log('Adding task:', task);
  }

  updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
   
  }
}