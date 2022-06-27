import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject();
  constructor() {}

  toggleAddTask (){
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask);
  }

  onToggle():Observable<any>{
    // => .asObservable()  ???????
    return this.subject.asObservable()
  }

}
