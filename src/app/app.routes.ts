import { Routes } from '@angular/router';
import { RegisterComponent } from './features/public/components/register/register.component';
import { ForbidenComponent } from './features/public/components/forbiden/forbiden.component';
import { NotFoundComponent } from './features/public/components/not-found/not-found.component';
import { PublicDashboardComponent } from './features/public/public-dashboard/public-dashboard.component';
import { LoginComponent } from './features/public/components/login/login.component';
import { AdminGuard } from './auth/guards/admin.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { UserGuard } from './auth/guards/user.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'public', component: PublicDashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(admin => admin.AdminModule), canActivate: [AuthGuard, AdminGuard] },
  { path: 'user', loadChildren: () => import('./features/users/users.module').then(users => users.UsersModule), canActivate: [AuthGuard, UserGuard] },
  { path: 'forbidden', component: ForbidenComponent },
  { path: '**', component: NotFoundComponent }
];
