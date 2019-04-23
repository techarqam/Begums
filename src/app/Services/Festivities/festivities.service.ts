import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { ToastController, AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class FestivitiesService {
  festModal = new FormGroup({
    Name: new FormControl("", Validators.required),
    Date: new FormControl("", Validators.required),
    Status: new FormControl("Not Completed"),
    Message: new FormControl("", Validators.required),
    ImgUrl: new FormControl(""),
    TimeStamp: new FormControl(moment().format()),
  })

  constructor(
    private firestore: AngularFirestore,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) { }


  // checkFestivityName(fest) {
  //   this.firestore.collection(`Festivities`).doc(`fest.Name`).snapshotChanges().subscribe(snap => {
  //     if (snap.payload.exists) {
  //       this.addFest(fest);
  //     } else {
  //       this.presentToast("Fest by that name already exists !!");
  //     }
  //   })
  // }

  async addFest(fest) {
    fest.Name = fest.Name.toLowerCase();
    return firebase.storage().ref("Festivities").child(fest.Name).put(fest.Image).then(() => {
      firebase.storage().ref("Festivities").child(fest.Name).getDownloadURL().then((dURL) => {
        fest.ImgUrl = dURL;
      }).then(() => {
        delete fest.Image;
        this.firestore.collection(`Festivities`).doc(fest.Name).set(fest).then(() => {
          this.presentToast("Fest Created");
        })
      })
    })

  }

  getFests() {
    return this.firestore.collection(`Festivities`).valueChanges();
  }



  async confirmDelete(fest) {
    const alert = await this.alertCtrl.create({
      header: 'Remove this Banner ?',
      message: 'This CANNOT be recovered !!!',
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(fest);
          }
        }
      ]
    });

    await alert.present();
  }


  async delete(fest) {
    return firebase.storage().ref("Festivities").child(fest).delete().then(() => {
      this.firestore.collection(`Festivities`).doc(fest).delete().then(() => {
        this.presentToast("Fest Removed");
      })
    })
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
