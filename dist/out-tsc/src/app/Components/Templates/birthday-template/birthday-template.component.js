import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TemplateService } from 'src/app/Services/Templates/template.service';
var BirthdayTemplateComponent = /** @class */ (function () {
    function BirthdayTemplateComponent(tempService) {
        this.tempService = tempService;
        this.showEdit = false;
        this.showLoader = true;
    }
    BirthdayTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tempService.getBirthTemp().subscribe(function (snap) {
            _this.birthTemp = snap.payload.data();
        });
        this.showLoader = false;
    };
    BirthdayTemplateComponent.prototype.editTrue = function () {
        this.showEdit = !this.showEdit;
        this.tempService.birthTempModal.reset();
    };
    BirthdayTemplateComponent.prototype.upadateBirthTemp = function () {
        var _this = this;
        if (this.tempService.birthTempModal.valid) {
            this.showLoader = true;
            var temp = this.tempService.birthTempModal.value;
            this.tempService.updateBirthTemp(temp).then(function () {
                _this.tempService.birthTempModal.reset();
                _this.showEdit = false;
                _this.showLoader = false;
                _this.tempService.presentToast("Birthday Template Updated");
            });
        }
        else {
            this.tempService.presentToast("Enter a valid Message");
        }
    };
    BirthdayTemplateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-birthday-template',
            templateUrl: './birthday-template.component.html',
            styleUrls: ['./birthday-template.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateService])
    ], BirthdayTemplateComponent);
    return BirthdayTemplateComponent;
}());
export { BirthdayTemplateComponent };
//# sourceMappingURL=birthday-template.component.js.map