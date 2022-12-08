import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItem } from '../model/task-item.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  @Input()
  task: TaskItem = {} as TaskItem;

  @Output()
  checkboxClicked = new EventEmitter<TaskItem>();

  @Output()
  deleteClicked = new EventEmitter<TaskItem>();

  onCheckboxClick() {
    this.task.completed = !this.task.completed;
    console.log(JSON.stringify(this.task));
    this.checkboxClicked.emit(this.task);
  }

  onDeleteClick() {
    console.log("Delete was clicked.");
    this.deleteClicked.emit(this.task);
  }
  
}
