import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // para usar ngModel y reactive forms
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // para hacer peticiones http
// todo lo q se agrega aca, hay que agregarlo al imports de abajo

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { StudentModifyComponent } from './components/student-modify/student-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    CareerListComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    StudentViewComponent,
    StudentModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
