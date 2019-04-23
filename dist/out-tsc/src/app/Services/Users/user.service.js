import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { FeedbackComponent } from 'src/app/Components/Feedback/feedback/feedback.component';
var UserService = /** @class */ (function () {
    function UserService(firestore, toastCtrl, navCtrl, modalCtrl) {
        this.firestore = firestore;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.user = new FormGroup({
            Name: new FormControl("", Validators.required),
            DOB: new FormControl(""),
            Phone: new FormControl("", [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
            ]),
            TimeStamp: new FormControl(moment().format()),
        });
    }
    UserService.prototype.userSearch = function (searchValue) {
        return this.firestore.collection("Users", function (ref) { return ref.orderBy("Name")
            .startAt(searchValue.toLowerCase()).endAt(searchValue.toLowerCase() + "\uf8ff")
            .limit(10); })
            .snapshotChanges();
    };
    UserService.prototype.checkUser = function (user) {
        var _this = this;
        var tStrng = String(user.Phone);
        return new Promise(function (resolve, reject) {
            _this.firestore.collection("Users").doc(tStrng).get().subscribe(function (snip) {
                if (snip.exists) {
                    _this.presentToast("Phone Number already exists !!");
                    reject(true);
                }
                else {
                    _this.addUser(user);
                    resolve(true);
                }
            });
        });
    };
    UserService.prototype.addUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var phoneNum;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                phoneNum = user.Phone;
                return [2 /*return*/, this.firestore.collection("Users").doc(phoneNum).set(user)
                        .then(function () {
                        _this.presentToast("User Created");
                        _this.navCtrl.navigateRoot("/clients").then(function () {
                            _this.feedback(user);
                        });
                    })];
            });
        });
    };
    UserService.prototype.getUsers = function (num) {
        return this.firestore.collection('Users', function (ref) { return ref.orderBy("Name").limit(num); }).snapshotChanges();
    };
    UserService.prototype.getallUsers = function () {
        return this.firestore.collection('Users').valueChanges();
    };
    UserService.prototype.getUser = function (key) {
        return this.firestore.doc("Users/" + key).valueChanges();
    };
    UserService.prototype.updateUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.firestore.collection("Users")
                        .doc(user.key).set({ Name: user.Name.toLowerCase() }, { merge: true })
                        .then(function () {
                        _this.navCtrl.navigateForward("/user-details/" + user.key);
                    })];
            });
        });
    };
    UserService.prototype.delUser = function (key) {
        var _this = this;
        this.firestore.doc("Users/" + key).delete().then(function () {
            _this.navCtrl.navigateRoot('/clients');
        });
    };
    UserService.prototype.feedback = function (u) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: FeedbackComponent,
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //Support
    UserService.prototype.presentToast = function (msg) {
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
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            ToastController,
            NavController,
            ModalController])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map