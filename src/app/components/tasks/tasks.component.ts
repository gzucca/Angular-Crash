import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  // ngOnInit(): void {
  //   this.tasks = this.taskService.getTasks();
  // }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    //! en este caso, no es necesario pasar nada dentro del subscribe, ya que además de actualizar el task, no queremos hacer nada más. El subscribe suele usarse para mostrar un cambio en el HTML visualizado, pero el cambio ya se visualiza en el navegador gracias a la condición puesta en el HTML con el ngClass (y en la DB gracias a la función updateTaskReminder arriba del subscribe).
  }

  addTask(task: Task): void {
    this.taskService
      .addTask(task)
      .subscribe(
        (task) => (this.tasks.push(task))
      );
  }
}
