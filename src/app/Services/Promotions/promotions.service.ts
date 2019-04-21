import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
import { MessagingService } from '../Messaging/messaging.service';
import * as moment from 'moment';
import { UserService } from '../Users/user.service';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  bulkPromModal = new FormGroup({
    Message: new FormControl("", [
      Validators.required,
      Validators.maxLength(256),
    ]),
    TimeStamp: new FormControl(moment().format())
  });

  bulkRef = this.firestore.collection(`Bulk Promotions/`, ref => ref.orderBy("TimeStamp", "desc"));

  constructor(
    private firestore: AngularFirestore,
    public toastCtrl: ToastController,
    public messService: MessagingService,
    public userService: UserService,
    public navCtrl: NavController,
  ) { }


  // this.messService.sendMessage(mess, []).then(() => {
  //   this.presentToast("Promotion Sent");
  // })

  async sendBulkPromotion(mess) {
    return this.bulkRef.add(mess).then(() => {
      this.userService.getallUsers().subscribe(snap => {
        this.messService.sendMessage(mess, snap).then(() => {
          this.navCtrl.navigateRoot("/dashboard").then(() => {
            this.userService.presentToast("Messages sent");
          });
        });
      })
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
