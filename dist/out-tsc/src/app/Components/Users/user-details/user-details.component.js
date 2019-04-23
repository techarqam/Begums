import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userService, router, navCtrl) {
        this.userService = userService;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.userDetails();
    };
    UserDetailsComponent.prototype.userDetails = function () {
        var _this = this;
        this.userService.getUser(this.userId).subscribe(function (snap) {
            _this.user = snap;
        });
    };
    UserDetailsComponent.prototype.editClient = function () {
        this.navCtrl.navigateForward("/edit-user/" + this.userId);
    };
    UserDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            ActivatedRoute,
            NavController])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map