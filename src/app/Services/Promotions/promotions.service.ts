import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { MessagingService } from '../Messaging/messaging.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {


  bulkPromModal = new FormGroup({
    Message: new FormControl("", [
      Validators.required,
      Validators.maxLength(256),
    ]),
  });

  bulkRef = this.firestore.collection(`Bulk Promotions/`);

  constructor(
    private firestore: AngularFirestore,
    public toastCtrl: ToastController,
    public messService: MessagingService,
  ) { }



  async sendBulkPromotion(mess) {
    return this.bulkRef.add(mess).then(() => {
      this.presentToast("Promotion Sent");
    })
  }
  getBulkPromos() {
    return this.bulkRef.valueChanges();
  }


  //Support
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom",
      showCloseButton: false,
    });
    toast.present();
  }

}
