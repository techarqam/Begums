import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { NavController } from '@ionic/angular';
import { BirthdayService } from 'src/app/Services/Birthday/birthday.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(logoutService, navCtrl, birthdayService) {
        this.logoutService = logoutService;
        this.navCtrl = navCtrl;
        this.birthdayService = birthdayService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.birthdayService.sendBirthDayWishes().then(function () {
            _this.birthdayService.sendFestivities();
        });
    };
    DashboardComponent.prototype.gtClients = function () {
        this.navCtrl.navigateForward("/clients");
    };
    DashboardComponent.prototype.gtbulkPromotions = function () {
        this.navCtrl.navigateForward("/bulk-promotions");
    };
    DashboardComponent.prototype.gtPromotionsS = function () {
        this.navCtrl.navigateForward("/select-promotion");
    };
    DashboardComponent.prototype.gtfest = function () {
        this.navCtrl.navigateForward("/festivities");
    };
    DashboardComponent.prototype.signOut = function () {
        this.logoutService.logOut();
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService,
            NavController,
            BirthdayService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map