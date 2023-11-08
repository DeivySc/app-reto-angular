import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TaskComponent } from './components/task/task.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
