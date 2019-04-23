import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MessagingService = /** @class */ (function () {
    function MessagingService(http) {
        this.http = http;
    }
    MessagingService.prototype.sendMessage = function (mess, phones) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log("mesage :", mess);
                console.log("phones :", phones);
                return [2 /*return*/];
            });
        });
    };
    MessagingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MessagingService);
    return MessagingService;
}());
export { MessagingService };
//# sourceMappingURL=messaging.service.js.map