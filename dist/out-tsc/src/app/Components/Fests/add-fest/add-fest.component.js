import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FestivitiesService } from 'src/app/Services/Festivities/festivities.service';
import { NavController } from '@ionic/angular';
var AddFestComponent = /** @class */ (function () {
    function AddFestComponent(festService, navCtrl) {
        this.festService = festService;
        this.navCtrl = navCtrl;
        this.showLoader = false;
    }
    AddFestComponent.prototype.ngOnInit = function () { };
    AddFestComponent.prototype.checkFest = function () {
        this.addFest();
    };
    AddFestComponent.prototype.addFest = function () {
        var _this = this;
        this.showLoader = true;
        if (this.festService.festModal.valid) {
            var temp = this.festService.festModal.value;
            temp.Image = this.img2;
            this.festService.addFest(temp).then(function () {
                _this.festService.festModal.reset();
                _this.showLoader = false;
                _this.navCtrl.navigateRoot('/festivities');
            });
        }
        else {
            this.festService.presentToast("Please complete the Required Details");
        }
    };
    AddFestComponent.prototype.fileChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.img1 = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        var fileList = event.target.files;
        var file = fileList[0];
        this.img2 = file;
    };
    AddFestComponent.prototype.removeImage = function () {
        this.img1 = null;
    };
    AddFestComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-fest',
            templateUrl: './add-fest.component.html',
            styleUrls: ['./add-fest.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FestivitiesService,
            NavController])
    ], AddFestComponent);
    return AddFestComponent;
}());
export { AddFestComponent };
//# sourceMappingURL=add-fest.component.js.map