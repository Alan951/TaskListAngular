import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDividerModule, MatListModule, MatCheckboxModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material/';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule, 
    MatListModule, 
    MatCheckboxModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  entryComponents: [
    AddTaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
