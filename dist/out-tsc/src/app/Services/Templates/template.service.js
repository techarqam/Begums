import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
var TemplateService = /** @class */ (function () {
    function TemplateService(db, toastCtrl) {
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.birthTempModal = new FormGroup({
            Message: new FormControl("", Validators.required),
        });
        this.FeedbackTempModal = new FormGroup({
            Message: new FormControl("", Validators.required),
        });
    }
    TemplateService.prototype.getBirthTemp = function () {
        return this.db.doc("Templates/Birthday").snapshotChanges();
    };
    TemplateService.prototype.updateBirthTemp = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.db.collection("Templates").doc("Birthday").set(message)];
            });
        });
    };
    TemplateService.prototype.getFeedTemp = function () {
        return this.db.collection("Templates").doc("Feedback").snapshotChanges();
    };
    TemplateService.prototype.updateFeedTemp = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.db.collection("Templates").doc("Feedback").set(message)];
            });
        });
    };
    //Support
    TemplateService.prototype.presentToast = function (msg) {
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
    TemplateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            ToastController])
    ], TemplateService);
    return TemplateService;
}());
export { TemplateService };
//# sourceMappingURL=template.service.js.map