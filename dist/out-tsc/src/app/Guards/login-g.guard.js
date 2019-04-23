import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import * as firebase from 'firebase';
import { LoginService } from '../Services/Auth/login.service';
var LoginGGuard = /** @class */ (function () {
    function LoginGGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginGGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/login']);
                    _this.authService.presentToast("You are not Logged in");
                    resolve(false);
                }
            });
        });
    };
    LoginGGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            LoginService])
    ], LoginGGuard);
    return LoginGGuard;
}());
export { LoginGGuard };
//# sourceMappingURL=login-g.guard.js.map