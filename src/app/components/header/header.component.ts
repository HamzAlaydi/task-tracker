import { UiService } from './../../services/ui.service';
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public title = 'Tracker Task';
  public showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private _uiService: UiService) {
    // => this.subscription ???????
    this.subscription = this._uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {}

  toggleAddTask() {
    this._uiService.toggleAddTask();
  }
}
