import { Component, OnInit } from '@angular/core';
import { PromotionsService } from 'src/app/Services/Promotions/promotions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bulk-promotion',
  templateUrl: './bulk-promotion.component.html',
  styleUrls: ['./bulk-promotion.component.scss'],
})
export class BulkPromotionComponent implements OnInit {

  bulkPromos: Observable<any>;
  showLoader: boolean = false;

  loader: boolean = true;
  constructor(
    private promService: PromotionsService,
  ) { }

  ngOnInit() {
    this.bulkPromos = this.promService.getBulkPromos();
    this.bulkPromos.subscribe(() => { this.loader = false });
  }

  sendPromotion() {
    if (this.promService.bulkPromModal.valid) {
      this.showLoader = true;
      let temp = this.promService.bulkPromModal.value;
      this.promService.sendBulkPromotion(temp).then(() => {
        this.promService.bulkPromModal.reset();
        this.showLoader = false;
      }).catch((err) => {
        this.promService.presentToast("Please enter a Message").then(() => {
          this.showLoader = false;
        });
      });
    } else {
      this.promService.presentToast("Please enter a Message");
    }
  }
}
