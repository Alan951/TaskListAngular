import { TaskModel } from './../models/task-model';
import { TaskListService } from './../services/task-list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  private taskToAdd: TaskModel;

  @Output()
  public exitEmitter: EventEmitter<string> = new EventEmitter();

  constructor( private taskService: TaskListService ) { }

  ngOnInit() {
    this.taskToAdd = new TaskModel();
  }

  public addTask(): void{
    //Validaciones
    if(!this.taskToAdd.titulo || this.taskToAdd.titulo.trim() == ''){
      return;
    }else if(!this.taskToAdd.descripcion || this.taskToAdd.descripcion.trim() == ''){
      return;
    }

    //Agregar tarea
    this.taskService.addTaskStart(this.taskToAdd);
    this.exit('added');
  }

  public cancel(): void{
    console.log('onCancel invoked');
    this.exit('cancel');
  }

  public exit(status: string): void{
    //Emitir evento de salida.
    this.exitEmitter.emit(status);
  }

}
