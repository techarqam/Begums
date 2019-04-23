import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';
import { UserService } from '../Users/user.service';
import { MessagingService } from '../Messaging/messaging.service';
import { FestivitiesService } from '../Festivities/festivities.service';
var BirthdayService = /** @class */ (function () {
    function BirthdayService(db, toastCtrl, userService, messageService, festService) {
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.messageService = messageService;
        this.festService = festService;
        this.cDob = moment().format("DDMM");
        this.birthDayArrPhone = [];
        this.birthDayArr = [];
        this.getTemplate();
    }
    // getBirthDays() {
    // }
    BirthdayService.prototype.getTemplate = function () {
        var _this = this;
        this.db.doc("Templates/Birthday").snapshotChanges().subscribe(function (snap) {
            var temp = snap.payload.data();
            _this.birthTemplate = temp.Message;
        });
    };
    BirthdayService.prototype.sendBirthDayWishes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.db.doc("BDs/" + moment().format("YYYYMMDD")).get().subscribe(function (snap) {
                    if (snap.exists) {
                        _this.presentToast("Birthdays for today Sent !!");
                        console.log("Birthdays for today Sent !!");
                    }
                    else {
                        _this.userService.getallUsers().subscribe(function (snap) {
                            snap.forEach(function (snip) {
                                var temp = snip;
                                temp.DOB = moment(temp.DOB).format("DDMM");
                                if (temp.DOB == _this.cDob) {
                                    _this.birthDayArr.push(temp);
                                    _this.birthDayArrPhone.push(temp.Phone);
                                }
                            });
                            _this.messageService.sendMessage(_this.birthTemplate, _this.birthDayArrPhone).then(function () {
                                console.log(_this.birthDayArr);
                                _this.birthDayArr.forEach(function (snap) {
                                    var temp = snap;
                                    _this.db.collection("BDs").doc(moment().format("YYYYMMDD")).collection("Clients").doc(temp.Phone).set({ Name: temp.Name });
                                });
                            }).then(function () {
                                _this.db.collection("BDs").doc(moment().format("YYYYMMDD")).set({ Delivered: true, TimeStamp: moment().format() });
                            });
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    BirthdayService.prototype.sendFestivities = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.festService.getFests().subscribe(function (snap) {
                    snap.forEach(function (sanip) {
                        var temp = sanip;
                        temp.FestDate = moment(temp.Date).format("DDMM");
                        if (temp.FestDate == _this.cDob && temp.Status == "Not Completed") {
                            var m_1 = temp.Message + "%0A" + temp.ImgUrl;
                            _this.userService.getallUsers().subscribe(function (snap) {
                                _this.messageService.sendMessage(m_1, snap).then(function () {
                                    _this.db.collection("Festivities").doc(temp.Name).set({ Status: "Completed" }, { merge: true }).then(function () {
                                        _this.userService.presentToast("Festivities sent");
                                    });
                                });
                            });
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    //Support
    BirthdayService.prototype.presentToast = function (msg) {
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
    BirthdayService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            ToastController,
            UserService,
            MessagingService,
            FestivitiesService])
    ], BirthdayService);
    return BirthdayService;
}());
export { BirthdayService };
//# sourceMappingURL=birthday.service.js.map