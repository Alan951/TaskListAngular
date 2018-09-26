import { TaskListService } from './services/task-list.service';
import { Component } from '@angular/core';
import { TaskModel } from './models/task-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-list';

  private tasksCompleted: boolean;

  constructor(private taskService: TaskListService){

  }

  public deleteTask(task: TaskModel){
    let elementIndex: number;

    elementIndex = this.taskService.getTaskList().indexOf(task);

    this.taskService.getTaskList().splice(elementIndex, 1);
  }

  public taskCompleted(task: TaskModel){
    task.realizada = true;

  }

  public getTasks(): Array<TaskModel>{
    if(this.tasksCompleted){
      return this.taskService.getTaskList();
    }else{
      return this.taskService.getTaskList().filter((task) => !task.realizada);
    }
  }

}
