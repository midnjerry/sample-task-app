import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../model/task-item.interface';
import { TaskApiService } from '../service/task-api.service';


// https://stackoverflow.com/questions/49133449/how-to-refresh-the-page-after-delete-in-angular5
@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
taskList: TaskItem[] = [];

constructor(private apiService: TaskApiService){}

ngOnInit(): void {
  this.apiService.getAll().subscribe((result:TaskItem[])=> {
    this.taskList = result;
  });
  }

update(task: TaskItem): void {
  this.apiService.updateTask(task.id, task).subscribe(() => {
    //update inventory    
  });
}

delete(task: TaskItem): void {
  this.apiService.deleteTask(task.id).subscribe(() => {
    this.taskList.splice(this.taskList.indexOf(task));
    //update inventory
  });
}

createTask(): void {
  let title = "klfghjj";
  if (!title) return;

  let body = {
    title: title,
    completed: false
  } as TaskItem;

  this.apiService.createTask(body).subscribe((result)=> {
    this.taskList.push(result);
  });

}

}
