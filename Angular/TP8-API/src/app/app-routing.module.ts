import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: 'students', component : StudentAddComponent, canActivate: [AuthGuard]}, // el canActivate comprueba si se puede acceder o no a esa url
  {path: 'careers', component : CareerListComponent, canActivate: [AuthGuard]},
  {path: 'login', component : LoginComponent},
  {path: 'sign-up', component : SignUpComponent},
  {path: 'student/view/:id', component : StudentViewComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
