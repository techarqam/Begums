import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.checkData = function () {
        if (this.loginService.signIn.valid) {
            this.login();
        }
        else {
            this.loginService.presentToast("Wrong Credentials");
        }
    };
    LoginComponent.prototype.login = function () {
        var user = this.loginService.signIn.value;
        this.loginService.login(user);
        this.loginService.signIn = null;
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map