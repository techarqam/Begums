import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/Users/user.service';
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(router, alertCtrl, userService) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.showLoader = false;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.getUser();
    };
    EditUserComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.userId).subscribe(function (snap) {
            _this.user = snap;
            _this.userService.user.setValue(_this.user);
        });
    };
    EditUserComponent.prototype.updateUser = function () {
        var _this = this;
        var temp = this.userService.user.value;
        if (temp.Name) {
            temp.key = this.userId;
            this.showLoader = true;
            this.userService.updateUser(temp).then(function () {
                _this.showLoader = false;
            });
        }
        else {
            this.userService.presentToast("Enter a Name for the User");
        }
    };
    EditUserComponent.prototype.delConfirmUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Are you sure you want to Delete Client ?',
                            message: 'This data cannot be recovered again.',
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: "Yes, I'm sure",
                                    handler: function () {
                                        _this.delUser();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditUserComponent.prototype.delUser = function () {
        this.userService.delUser(this.userId);
    };
    EditUserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-user',
            templateUrl: './edit-user.component.html',
            styleUrls: ['./edit-user.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AlertController,
            UserService])
    ], EditUserComponent);
    return EditUserComponent;
}());
export { EditUserComponent };
//# sourceMappingURL=edit-user.component.js.map