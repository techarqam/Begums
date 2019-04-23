import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessagingService } from '../Messaging/messaging.service';
var FeedbackService = /** @class */ (function () {
    function FeedbackService(db, messagingService) {
        this.db = db;
        this.messagingService = messagingService;
        this.feedbackModel = new FormGroup({
            rating: new FormControl("", Validators.required),
            comment: new FormControl(""),
            timeStamp: new FormControl(moment().format())
        });
        this.getTemplate();
    }
    FeedbackService.prototype.getTemplate = function () {
        var _this = this;
        this.db.doc("Templates/Feedback").snapshotChanges().subscribe(function (snap) {
            var temp = snap.payload.data();
            _this.feedTemplate = temp.Message;
        });
    };
    FeedbackService.prototype.reqFeedback = function (phone) {
        this.feedTemplate = this.feedTemplate + "\nbegums.tk/ufb/" + phone;
        return this.messagingService.sendMessage(this.feedTemplate, phone);
    };
    FeedbackService.prototype.submitRating = function (feedback) {
        console.log(feedback);
    };
    FeedbackService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            MessagingService])
    ], FeedbackService);
    return FeedbackService;
}());
export { FeedbackService };
//# sourceMappingURL=feedback.service.js.map