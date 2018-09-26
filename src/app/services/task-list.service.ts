import { TaskModel } from './../models/task-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private taskList: Array<TaskModel>;

  constructor() {
    this.taskList = new Array<TaskModel>();
    
    //tareas de ejemplo
    this.taskList.push(new TaskModel('Tarea de Seguridad en desarrollo', 'Investigar los distintos metodos de desarrollo que existen.', 3, new Date(2018, 9, 27)));
    this.taskList.push(new TaskModel('Tarea de Practicas avanzadas de Seguridad', 'Realizar escaneo y enumeración a la máquina virtual.', 4, new Date(2018, 9, 27)));
    this.taskList.push(new TaskModel('Tarea de Continuidad de Negocio', 'Realizar correcciónes en el proyecto.', 3, new Date(2018, 10, 7)));
  }

  public getTaskList(): Array<TaskModel>{
    return this.taskList;
  }
}
