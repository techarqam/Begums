import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { LoginService } from '../Services/Auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: LoginService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          this.authService.presentToast("You are not Logged in");
          resolve(false);
        }
      });
    });

  }
}