import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
  {path: 'products', component : TableComponent, canActivate: [AuthGuard]}, // el canActivate comprueba si se puede acceder o no a esa url
  {path: 'login', component : LoginComponent},
  {path: 'sign-up', component : SignUpComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'}, // por defecto , la pagina va a los productos, si no estamos logueado, el authguard nos va a mandar a login
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
