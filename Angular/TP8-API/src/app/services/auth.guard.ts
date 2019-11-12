import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

// para generar el authGuard :  ng generate guard services/auth
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}
  
  canActivate( // esto viene generado ya
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      let url = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('IsLoggedIn:' + this.userService.getToken());
    if (this.userService.getToken()) { return true; }

    // Store the attempted URL for redirecting
    this.userService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
  
}
