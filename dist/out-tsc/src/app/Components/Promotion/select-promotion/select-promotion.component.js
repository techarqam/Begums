import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/Services/Users/user.service';
import { MessagingService } from 'src/app/Services/Messaging/messaging.service';
var SelectPromotionComponent = /** @class */ (function () {
    function SelectPromotionComponent(userService, navCtrl, alertCtrl, messageService) {
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.messageService = messageService;
        this.frstsNum = 10;
        this.showLoader = true;
        this.searchValue = "";
        this.selArray = [];
        this.mess = '';
    }
    SelectPromotionComponent.prototype.ngOnInit = function () {
        this.slides.lockSwipes(true);
        this.getUsers();
    };
    SelectPromotionComponent.prototype.gtNextCheck = function () {
        if (this.selArray.length) {
            this.gtNext();
        }
        else {
            this.userService.presentToast("Select atleast 1 Client");
        }
    };
    SelectPromotionComponent.prototype.addToArr = function (a, id) {
        switch (a) {
            case true:
                this.selArray.push(id);
                break;
            case false:
                this.rmFrmArray(id);
                break;
        }
    };
    SelectPromotionComponent.prototype.rmFrmArray = function (Phone) {
        var ind = this.selArray.indexOf(Phone);
        this.selArray.splice(ind, 1);
    };
    SelectPromotionComponent.prototype.checkData = function () {
        if (this.mess) {
            this.sendConfirm();
        }
    };
    SelectPromotionComponent.prototype.sendConfirm = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Send Message to selected Clients ?',
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: "Yes, I'm sure",
                                    handler: function () {
                                        _this.sendSMS();
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
    SelectPromotionComponent.prototype.sendSMS = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messageService.sendMessage(this.mess, this.selArray).then(function () {
                            _this.navCtrl.navigateRoot('/dashboard').then(function () {
                                _this.userService.presentToast("Messages sent");
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectPromotionComponent.prototype.search = function () {
        if (this.searchValue) {
            this.users = this.userService.userSearch(this.searchValue);
        }
        else {
            this.users = this.userService.getUsers(this.frstsNum);
        }
    };
    SelectPromotionComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = this.userService.getUsers(this.frstsNum);
        this.users.subscribe(function () { _this.showLoader = false; });
    };
    SelectPromotionComponent.prototype.loadMore = function () {
        this.frstsNum = this.frstsNum + 10;
        this.getUsers();
    };
    SelectPromotionComponent.prototype.addUser = function () {
        this.navCtrl.navigateForward('/add-client');
    };
    SelectPromotionComponent.prototype.gtNext = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1, 500);
        this.slides.lockSwipes(true);
    };
    SelectPromotionComponent.prototype.gtPrev = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0, 500);
        this.slides.lockSwipes(true);
    };
    tslib_1.__decorate([
        ViewChild(IonSlides),
        tslib_1.__metadata("design:type", IonSlides)
    ], SelectPromotionComponent.prototype, "slides", void 0);
    SelectPromotionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-select-promotion',
            templateUrl: './select-promotion.component.html',
            styleUrls: ['./select-promotion.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            NavController,
            AlertController,
            MessagingService])
    ], SelectPromotionComponent);
    return SelectPromotionComponent;
}());
export { SelectPromotionComponent };
//# sourceMappingURL=select-promotion.component.js.map