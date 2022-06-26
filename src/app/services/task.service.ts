import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock.task';
import {ITask} from '../Task'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public Tasks:ITask[] = TASKS; 
  private _URL = "http://localhost:3000/tasks"
  constructor( private http :HttpClient) { }

  getTasks = ():Observable<ITask[]> =>{
    return this.http.get<ITask[]>(this._URL)
  }

  deleteTask(task:ITask):Observable<ITask>{
    const elementUrl = `${this._URL}/${task.id}`
    return this.http.delete<ITask>(elementUrl);
  }

}
