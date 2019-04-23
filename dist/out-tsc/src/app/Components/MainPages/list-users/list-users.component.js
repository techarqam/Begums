import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
import { NavController, AlertController } from '@ionic/angular';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';
var ListUsersComponent = /** @class */ (function () {
    function ListUsersComponent(userService, navCtrl, feedbackService, alertCtrl) {
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.feedbackService = feedbackService;
        this.alertCtrl = alertCtrl;
        this.searchValue = "";
        this.frstsNum = 10;
        this.showLoader = true;
        this.getUsers();
    }
    ListUsersComponent.prototype.ngOnInit = function () {
    };
    ListUsersComponent.prototype.search = function () {
        if (this.searchValue) {
            this.users = this.userService.userSearch(this.searchValue);
        }
        else {
            this.users = this.userService.getUsers(this.frstsNum);
        }
    };
    ListUsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = this.userService.getUsers(this.frstsNum);
        this.users.subscribe(function () { _this.showLoader = false; });
    };
    ListUsersComponent.prototype.addUser = function () {
        this.navCtrl.navigateForward('/add-client');
    };
    ListUsersComponent.prototype.confirmFeedback = function (u) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Request Feedback ? ',
                            message: 'Send an SMS requesting Feedback to ' + u.payload.doc.data().Name,
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Yes, I understand',
                                    handler: function () {
                                        _this.feedback(u);
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
    ListUsersComponent.prototype.feedback = function (u) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.feedbackService.reqFeedback(u.payload.doc.id).then(function () {
                    _this.userService.presentToast("SMS Sent");
                });
                return [2 /*return*/];
            });
        });
    };
    ListUsersComponent.prototype.userDetails = function (userKey) {
        this.navCtrl.navigateForward("/user-details/" + userKey);
    };
    ListUsersComponent.prototype.loadMore = function () {
        this.frstsNum = this.frstsNum + 10;
        this.getUsers();
    };
    ListUsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-users',
            templateUrl: './list-users.component.html',
            styleUrls: ['./list-users.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            NavController,
            FeedbackService,
            AlertController])
    ], ListUsersComponent);
    return ListUsersComponent;
}());
export { ListUsersComponent };
//# sourceMappingURL=list-users.component.js.map