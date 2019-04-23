import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(userService) {
        this.userService = userService;
        this.showLoader = false;
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    AddUserComponent.prototype.checkData = function () {
        var tempUser = this.userService.user.value;
        var tStrng = String(tempUser.Phone);
        if (tempUser.Name) {
            if (tStrng.length == 10) {
                tempUser.Name = tempUser.Name.toLowerCase();
                tempUser.Phone = tStrng;
                this.addUser(tempUser);
            }
            else {
                this.userService.presentToast("Phone Number not Valid");
            }
        }
        else {
            this.userService.presentToast("Name not Valid");
        }
    };
    AddUserComponent.prototype.addUser = function (tempU) {
        var _this = this;
        this.showLoader = true;
        this.userService.checkUser(tempU).then(function () {
            _this.userService.user.reset();
        });
        this.showLoader = false;
    };
    AddUserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], AddUserComponent);
    return AddUserComponent;
}());
export { AddUserComponent };
//# sourceMappingURL=add-user.component.js.map