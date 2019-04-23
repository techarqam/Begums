import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { ToastController, AlertController } from '@ionic/angular';
var FestivitiesService = /** @class */ (function () {
    function FestivitiesService(firestore, toastCtrl, alertCtrl) {
        this.firestore = firestore;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.festModal = new FormGroup({
            Name: new FormControl("", Validators.required),
            Date: new FormControl("", Validators.required),
            Status: new FormControl("Not Completed"),
            Message: new FormControl("", Validators.required),
            ImgUrl: new FormControl(""),
            TimeStamp: new FormControl(moment().format()),
        });
    }
    // checkFestivityName(fest) {
    //   this.firestore.collection(`Festivities`).doc(`fest.Name`).snapshotChanges().subscribe(snap => {
    //     if (snap.payload.exists) {
    //       this.addFest(fest);
    //     } else {
    //       this.presentToast("Fest by that name already exists !!");
    //     }
    //   })
    // }
    FestivitiesService.prototype.addFest = function (fest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, firebase.storage().ref("Festivities").child(fest.Name).put(fest.Image).then(function () {
                        firebase.storage().ref("Festivities").child(fest.Name).getDownloadURL().then(function (dURL) {
                            fest.ImgUrl = dURL;
                        }).then(function () {
                            delete fest.Image;
                            _this.firestore.collection("Festivities").doc(fest.Name).set(fest).then(function () {
                                _this.presentToast("Fest Created");
                            });
                        });
                    })];
            });
        });
    };
    FestivitiesService.prototype.getFests = function () {
        return this.firestore.collection("Festivities").valueChanges();
    };
    FestivitiesService.prototype.confirmDelete = function (fest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Remove this Banner ?',
                            message: 'This CANNOT be recovered !!!',
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes, I understand',
                                    handler: function () {
                                        _this.delete(fest);
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
    FestivitiesService.prototype.delete = function (fest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, firebase.storage().ref("Festivities").child(fest).delete().then(function () {
                        _this.firestore.collection("Festivities").doc(fest).delete().then(function () {
                            _this.presentToast("Fest Removed");
                        });
                    })];
            });
        });
    };
    //Support
    FestivitiesService.prototype.presentToast = function (msg) {
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
    FestivitiesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            ToastController,
            AlertController])
    ], FestivitiesService);
    return FestivitiesService;
}());
export { FestivitiesService };
//# sourceMappingURL=festivities.service.js.map