import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './ejercicios/create/create.component';
import { IndexComponent } from './ejercicios/index/index.component';
import { MyindexComponent } from './ejercicios/myindex/myindex.component';
import { ViewComponent } from './ejercicios/view/view.component';
import { EditComponent } from './ejercicios/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: 'ejercicios', redirectTo: 'ejercicios/index', pathMatch: 'full'},
  { path: 'ejercicios/index', component: IndexComponent },
  { path: 'ejercicios/myindex', component: MyindexComponent , canActivate: [AuthGuardGuard]},
  { path: 'ejercicios/:ejerciciosId/view', component: ViewComponent },
  { path: 'ejercicios/create', component: CreateComponent},
  { path: 'ejercicios/:ejerciciosId/edit', component: EditComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
