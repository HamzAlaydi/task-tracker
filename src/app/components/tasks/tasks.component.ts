import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: ITask[] = [];
  constructor(
    private _tasksService: TaskService,
    private _taskService: TaskService
  ) {}

  ngOnInit(): void {
    this._tasksService.getTasks().subscribe((data) => (this.tasks = data));
  }

  setReminder(task: ITask) {
    task.reminder = !task.reminder;
    this._taskService.updateTaskReminder(task).subscribe(data=>console.log(data)
    );
  }

  public deleteTask = (task: ITask) => {
    this._taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  };

  public addTask(task:ITask){
    this._taskService.addTask(task).subscribe(task=>this.tasks.push(task  ))
    
  }
}
