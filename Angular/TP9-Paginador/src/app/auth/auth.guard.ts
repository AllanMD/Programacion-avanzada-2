import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
//ng generate guard auth/auth  
export class AuthGuard implements CanActivate {

  //esto hay q agregarlo manualmente
  constructor(private userService: UserService, private router: Router){}

  canActivate( // esto ya viene generado, solo hay q meterle la logica
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url: string = state.url;

      return this.checkLogin(url);  
  }

  checkLogin(url: string): boolean {
    console.log('IsLoggedIn:' + this.userService.token);
    if (this.userService.token) { return true; }

    // Store the attempted URL for redirecting
    this.userService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
  
}
