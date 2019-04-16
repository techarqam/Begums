import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  birthTempModal = new FormGroup({
    Message: new FormControl("", Validators.required),
  });
  FeedbackTempModal = new FormGroup({
    Message: new FormControl("", Validators.required),
  });

  constructor(
    private db: AngularFirestore,
    public toastCtrl: ToastController,
  ) { }

  getBirthTemp() {
    return this.db.doc(`Templates/Birthday`).snapshotChanges();
  }
  async updateBirthTemp(message) {
    return this.db.collection(`Templates`).doc(`Birthday`).set(message);

  }
  getFeedTemp() {
    return this.db.collection(`Templates`).doc(`Feedback`).snapshotChanges();
  }
  async updateFeedTemp(message) {
    return this.db.collection(`Templates`).doc(`Feedback`).set(message);
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
