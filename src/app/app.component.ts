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

    elementIndex = this.taskService.getTaskList().indexOf(task);
    this.taskService.getTaskList().splice(elementIndex, 1);
  }

  public taskCompleted(task: TaskModel) {
    task.realizada = true;
  }

  public newTask(): void{
    let compFactory = this.factoryResolver.resolveComponentFactory(AddTaskComponent)
    let compRef = this.addCompContainer.createComponent(compFactory);
    let addTaskCompInstance = (<AddTaskComponent>compRef.instance);
    this.addTaskComponent = addTaskCompInstance;
    this.addTaskComponent.exitEmitter.subscribe((res) => {
      console.log(res);
      this.addCompContainer.remove(0);
      this.addTaskComponent = undefined;
    });
  }

  public getTasks(): Array<TaskModel> {
    if (this.tasksCompleted) { 
      return this.taskService.getTaskList();
    } else {
      return this.taskService.getTaskList().filter((task) => !task.realizada);
    }
  }

}
