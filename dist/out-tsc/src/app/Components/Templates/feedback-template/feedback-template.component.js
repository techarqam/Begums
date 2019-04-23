import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TemplateService } from 'src/app/Services/Templates/template.service';
var FeedbackTemplateComponent = /** @class */ (function () {
    function FeedbackTemplateComponent(tempService) {
        this.tempService = tempService;
        this.showEdit = false;
        this.showLoader = true;
    }
    FeedbackTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedTemp = this.tempService.getFeedTemp().subscribe(function (snap) {
            _this.feedTemp = snap.payload.data();
        });
        this.showLoader = false;
    };
    FeedbackTemplateComponent.prototype.editTrue = function () {
        this.showEdit = !this.showEdit;
        this.tempService.birthTempModal.reset();
    };
    FeedbackTemplateComponent.prototype.upadateFeedTemp = function () {
        var _this = this;
        if (this.tempService.FeedbackTempModal.valid) {
            this.showLoader = true;
            var temp = this.tempService.FeedbackTempModal.value;
            this.tempService.updateFeedTemp(temp).then(function () {
                _this.tempService.FeedbackTempModal.reset();
                _this.showEdit = false;
                _this.showLoader = false;
                _this.tempService.presentToast("Feedback Template Updated");
            });
        }
        else {
            this.tempService.presentToast("Enter a valid Message");
        }
    };
    FeedbackTemplateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-feedback-template',
            templateUrl: './feedback-template.component.html',
            styleUrls: ['./feedback-template.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateService])
    ], FeedbackTemplateComponent);
    return FeedbackTemplateComponent;
}());
export { FeedbackTemplateComponent };
//# sourceMappingURL=feedback-template.component.js.map