import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavParams } from '@ionic/angular';
var ViewBirthdayPeopleComponent = /** @class */ (function () {
    function ViewBirthdayPeopleComponent(db, navParams) {
        this.db = db;
        this.navParams = navParams;
        this.key = this.navParams.get("key");
    }
    ViewBirthdayPeopleComponent.prototype.ngOnInit = function () {
        console.log(this.key);
        this.db.collection('BDs').doc(this.key).snapshotChanges().subscribe(function (snap) {
            console.log(snap.payload.data());
        });
    };
    ViewBirthdayPeopleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-birthday-people',
            templateUrl: './view-birthday-people.component.html',
            styleUrls: ['./view-birthday-people.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            NavParams])
    ], ViewBirthdayPeopleComponent);
    return ViewBirthdayPeopleComponent;
}());
export { ViewBirthdayPeopleComponent };
//# sourceMappingURL=view-birthday-people.component.js.map