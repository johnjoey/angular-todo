import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5'

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`)
  }

  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`
    return this.http.delete(url, httpOptions)
  }
}
