import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  //El método "next" es como un "then" en el que espera a la ejecución de la línea anterior para pasar el nuevo valor.

  onToggle(): Observable<any> {
  return this.subject.asObservable();
  }

}
