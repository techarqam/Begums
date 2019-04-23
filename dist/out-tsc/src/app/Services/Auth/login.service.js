import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
var LoginService = /** @class */ (function () {
    function LoginService(fireAuth, firestore, toastCtrl) {
        this.fireAuth = fireAuth;
        this.firestore = firestore;
        this.toastCtrl = toastCtrl;
        this.signIn = new FormGroup({
            Email: new FormControl("", Validators.required),
            Pass: new FormControl("", Validators.required)
        });
    }
    LoginService.prototype.login = function (user) {
        var _this = this;
        return this.fireAuth.auth.signInWithEmailAndPassword(user.Email, user.Pass)
            .catch(function (e) {
            _this.presentToast(e.message);
        }).then(function () {
            _this.fireAuth.authState.pipe(first()).pipe(tap(function (user) {
                if (user) {
                    console.log(user.email);
                    window.location.href = "/dashboard";
                }
            })).subscribe();
        });
    };
    LoginService.prototype.logOut = function () {
        var _this = this;
        this.fireAuth.auth.signOut().then(function () {
            window.location.href = "/login";
            _this.presentToast("Logged Out");
        });
    };
    //Support
    LoginService.prototype.presentToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 4000,
                            position: "bottom",
                            showCloseButton: false,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            AngularFirestore,
            ToastController])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map