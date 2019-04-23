import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { ViewBirthdayPeopleComponent } from '../view-birthday-people/view-birthday-people.component';
var DisplayBirthdaysComponent = /** @class */ (function () {
    function DisplayBirthdaysComponent(
    // private birthService: BirthdayService,
    modalCtrl, db) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.bds = [];
        this.db.collection('BDs', function (ref) { return ref.orderBy("TimeStamp", "asc"); }).snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snip) {
                var b = snip.payload.doc.data();
                b.id = snip.payload.doc.id;
                var year = +b.id.substring(0, 4);
                var month = +b.id.substring(4, 6);
                var by = +b.id.substring(6, 8);
                b.Dis = (month + "-" + by + "-" + year);
                _this.bds.push(b);
            });
        });
    }
    DisplayBirthdaysComponent.prototype.ngOnInit = function () { };
    DisplayBirthdaysComponent.prototype.viewBds = function (b) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: ViewBirthdayPeopleComponent,
                            componentProps: { key: b },
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
    DisplayBirthdaysComponent = tslib_1.__decorate([
        Component({
            selector: 'app-display-birthdays',
            templateUrl: './display-birthdays.component.html',
            styleUrls: ['./display-birthdays.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AngularFirestore])
    ], DisplayBirthdaysComponent);
    return DisplayBirthdaysComponent;
}());
export { DisplayBirthdaysComponent };
//# sourceMappingURL=display-birthdays.component.js.map