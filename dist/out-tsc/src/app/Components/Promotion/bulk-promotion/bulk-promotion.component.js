import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PromotionsService } from 'src/app/Services/Promotions/promotions.service';
import { AlertController } from '@ionic/angular';
var BulkPromotionComponent = /** @class */ (function () {
    function BulkPromotionComponent(promService, alertCtrl) {
        this.promService = promService;
        this.alertCtrl = alertCtrl;
        this.showLoader = false;
        this.loader = true;
    }
    BulkPromotionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bulkPromos = this.promService.getBulkPromos();
        this.bulkPromos.subscribe(function () { _this.loader = false; });
    };
    BulkPromotionComponent.prototype.sendConfirm = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Send Message to all Clients ?',
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: "Yes, I'm sure",
                                    handler: function () {
                                        _this.sendPromotion();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BulkPromotionComponent.prototype.sendPromotion = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var temp;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (this.promService.bulkPromModal.valid) {
                    this.showLoader = true;
                    temp = this.promService.bulkPromModal.value;
                    this.promService.sendBulkPromotion(temp).then(function () {
                        _this.promService.bulkPromModal.reset();
                        _this.showLoader = false;
                    }).catch(function (err) {
                        _this.promService.presentToast("Please enter a Message").then(function () {
                            _this.showLoader = false;
                        });
                    });
                }
                else {
                    this.promService.presentToast("Please enter a Message");
                }
                return [2 /*return*/];
            });
        });
    };
    BulkPromotionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bulk-promotion',
            templateUrl: './bulk-promotion.component.html',
            styleUrls: ['./bulk-promotion.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PromotionsService,
            AlertController])
    ], BulkPromotionComponent);
    return BulkPromotionComponent;
}());
export { BulkPromotionComponent };
//# sourceMappingURL=bulk-promotion.component.js.map