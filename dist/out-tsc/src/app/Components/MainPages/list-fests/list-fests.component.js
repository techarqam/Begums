import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FestivitiesService } from 'src/app/Services/Festivities/festivities.service';
var ListFestsComponent = /** @class */ (function () {
    function ListFestsComponent(navCtrl, festService) {
        this.navCtrl = navCtrl;
        this.festService = festService;
        this.showLoader = true;
    }
    ListFestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fests = this.festService.getFests();
        this.fests.subscribe(function () { _this.showLoader = false; });
        // this.fests = this.festService.getFests().pipe(
        //   map(actions => actions.map(a => {
        //     const data = a.payload.doc.data();
        //     const id = a.payload.doc.id;
        //     return { id, ...data };
        //   }))
        // );
    };
    ListFestsComponent.prototype.addFest = function () {
        this.navCtrl.navigateForward('/add-fest');
    };
    ListFestsComponent.prototype.delFest = function (fest) {
        this.festService.confirmDelete(fest);
    };
    ListFestsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-fests',
            templateUrl: './list-fests.component.html',
            styleUrls: ['./list-fests.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            FestivitiesService])
    ], ListFestsComponent);
    return ListFestsComponent;
}());
export { ListFestsComponent };
//# sourceMappingURL=list-fests.component.js.map