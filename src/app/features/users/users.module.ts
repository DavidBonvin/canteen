import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    // AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    UserDashboardComponent
  ],
  exports: [
  ]
})
export class UsersModule { }
