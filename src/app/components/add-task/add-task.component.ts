import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() onAddTask = new EventEmitter();
  subscription!: Subscription;
  showAddTask: boolean = false;
  constructor(private _uiService: UiService) {
    this.subscription = this._uiService
      .onToggle()
      .subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {}
  handleSubmit() {
    !this.text && alert('Must add Task !');
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
