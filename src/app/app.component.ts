import { TaskListService } from './services/task-list.service';
import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TaskModel } from './models/task-model';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-list';

  private tasksCompleted: boolean;

  @ViewChild("addCompContainer", {read: ViewContainerRef})
  private addCompContainer: ViewContainerRef;
  
  private addTaskComponent: AddTaskComponent;

  constructor(private taskService: TaskListService, private factoryResolver: ComponentFactoryResolver){}

  public deleteTask(task: TaskModel) {
    let elementIndex: number;
    //Obtener el indice de la tarea a eliminar
    elementIndex = this.taskService.getTaskList().indexOf(task);
    this.taskService.getTaskList().splice(elementIndex, 1);
  }

  public taskCompleted(task: TaskModel) {
    task.realizada = true;
  }

  public newTask(): void{
    //Instanciar el componente dinamicamente
    let compFactory = this.factoryResolver.resolveComponentFactory(AddTaskComponent)
    let compRef = this.addCompContainer.createComponent(compFactory);
    let addTaskCompInstance = (<AddTaskComponent>compRef.instance);
    this.addTaskComponent = addTaskCompInstance;

    //Escuchar el evento cuando presione cancelar o aceptar
    this.addTaskComponent.exitEmitter.subscribe((res) => {
      console.log(res);
      this.addCompContainer.remove(0);
      this.addTaskComponent = undefined;
    });
  }

  public getTasks(): Array<TaskModel> {
    if (this.tasksCompleted) { //Obtener todas las tareas
      return this.taskService.getTaskList();
    } else { //Obtener las tareas filtradas, solo las que no han sido realizadas
      return this.taskService.getTaskList().filter((task) => !task.realizada);
    }
  }

}
