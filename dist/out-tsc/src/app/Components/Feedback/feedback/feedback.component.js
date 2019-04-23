import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';
import { ModalController, NavParams } from '@ionic/angular';
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feedbackService, modalCtrl, navParams) {
        this.feedbackService = feedbackService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.key = this.navParams.get("user");
        console.log(this.key);
    }
    FeedbackComponent.prototype.ngOnInit = function () { };
    FeedbackComponent.prototype.submitRating = function () {
        var temp = this.feedbackService.feedbackModel.value;
        this.feedbackService.submitRating(temp);
    };
    FeedbackComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    FeedbackComponent = tslib_1.__decorate([
        Component({
            selector: 'app-feedback',
            templateUrl: './feedback.component.html',
            styleUrls: ['./feedback.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FeedbackService,
            ModalController,
            NavParams])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
export { FeedbackComponent };
//# sourceMappingURL=feedback.component.js.map