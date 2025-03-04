import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../public/components/not-found/not-found.component';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { UserGuard } from '../../auth/guards/user.guard';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserDashboardComponent, canActivate: [AuthGuard, UserGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
