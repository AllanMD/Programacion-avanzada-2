import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { ProductComponent } from './components/product/product.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { ReactiveFormsModule } from '@angular/forms'; // para usar ngModel y reactive forms
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // para hacer peticiones http
// todo lo q se agrega aca, hay que agregarlo al imports de abajo

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    ProductComponent,
    SignUpComponent,
    PageNotFoundComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
