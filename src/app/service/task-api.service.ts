import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskItem } from '../model/task-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  URL = "http://localhost:8080/api/tasks";

  constructor(private http: HttpClient) { }

  getAll(): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(this.URL);
  }

  getById(id: number): Observable<TaskItem> {
    return this.http.get<TaskItem>(this.URL + '/' + id)
  }
  createTask(body: TaskItem): Observable<TaskItem> {
    return this.http.post<TaskItem>(this.URL, body)
  }
  updateTask(id: number, body: TaskItem): Observable<TaskItem> {
    return this.http.put<TaskItem>(this.URL + '/' + id, body)
  }
  deleteTask(id: number): Observable<TaskItem> {
    return this.http.delete<TaskItem>(this.URL + '/' + id)
  }
}
