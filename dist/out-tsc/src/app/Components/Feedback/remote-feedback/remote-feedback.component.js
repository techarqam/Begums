import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/Users/user.service';
import { AlertController, } from '@ionic/angular';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';
var RemoteFeedbackComponent = /** @class */ (function () {
    function RemoteFeedbackComponent(router, alertCtrl, feedbackService, userService) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.feedbackService = feedbackService;
        this.userService = userService;
        this.showLoader = false;
    }
    RemoteFeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        // this.getUser();
    };
    // getUser() {
    //   this.userService.getUser(this.userId).subscribe(snap => {
    //     this.user = snap;
    //     console.log(this.user)
    //   })
    // }
    RemoteFeedbackComponent.prototype.sendFeedback = function () {
        // if (this.feedbackService.feedbackModel.valid) {
        var temp = this.feedbackService.feedbackModel.value;
        temp.userId = this.userId;
        this.feedbackService.submitRating(temp);
        // .then(() => {
        // })
        // } else {
        //   this.userService.presentToast("Select Stars to Rate Us !!")
        // }
    };
    RemoteFeedbackComponent = tslib_1.__decorate([
        Component({
            selector: 'app-remote-feedback',
            templateUrl: './remote-feedback.component.html',
            styleUrls: ['./remote-feedback.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AlertController,
            FeedbackService,
            UserService])
    ], RemoteFeedbackComponent);
    return RemoteFeedbackComponent;
}());
export { RemoteFeedbackComponent };
//# sourceMappingURL=remote-feedback.component.js.map