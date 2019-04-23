import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
import { MessagingService } from '../Messaging/messaging.service';
import * as moment from 'moment';
import { UserService } from '../Users/user.service';
var PromotionsService = /** @class */ (function () {
    function PromotionsService(firestore, toastCtrl, messService, userService, navCtrl) {
        this.firestore = firestore;
        this.toastCtrl = toastCtrl;
        this.messService = messService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.bulkPromModal = new FormGroup({
            Message: new FormControl("", [
                Validators.required,
                Validators.maxLength(256),
            ]),
            TimeStamp: new FormControl(moment().format())
        });
        this.bulkRef = this.firestore.collection("Bulk Promotions/", function (ref) { return ref.orderBy("TimeStamp", "desc"); });
    }
    // this.messService.sendMessage(mess, []).then(() => {
    //   this.presentToast("Promotion Sent");
    // })
    PromotionsService.prototype.sendBulkPromotion = function (mess) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.bulkRef.add(mess).then(function () {
                        _this.userService.getallUsers().subscribe(function (snap) {
                            _this.messService.sendMessage(mess, snap).then(function () {
                                _this.navCtrl.navigateRoot("/dashboard").then(function () {
                                    _this.userService.presentToast("Messages sent");
                                });
                            });
                        });
                    })];
            });
        });
    };
    PromotionsService.prototype.getBulkPromos = function () {
        return this.bulkRef.valueChanges();
    };
    //Support
    PromotionsService.prototype.presentToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
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
    PromotionsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            ToastController,
            MessagingService,
            UserService,
            NavController])
    ], PromotionsService);
    return PromotionsService;
}());
export { PromotionsService };
//# sourceMappingURL=promotions.service.js.map