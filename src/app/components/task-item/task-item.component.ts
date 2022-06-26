import { ITask } from './../../Task';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input() public task! :ITask;
  @Output() public onDeleteTask = new EventEmitter();
  faTimes = faTimes;
  
  
  constructor() { }
  public onDelete(task:ITask){
    this.onDeleteTask.emit(task)
  }
  
  
  ngOnInit(): void {
  }

}
