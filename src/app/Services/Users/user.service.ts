import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, NavController } from '@ionic/angular';
import * as  moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  user = new FormGroup({
    Name: new FormControl("", Validators.required),
    DOB: new FormControl(""),
    Phone: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    TimeStamp: new FormControl(moment().format()),
  });


  constructor(
    private firestore: AngularFirestore,
    public toastCtrl: ToastController,
    private navCtrl: NavController,

  ) { }






  checkUser(user) {
    let tStrng: string = String(user.Phone);
    this.firestore.collection("Users").doc(tStrng).snapshotChanges().subscribe(snip => {
      if (snip.payload.exists) {
        this.presentToast("Phone Number already exists !!")
      } else {
        this.addUser(user);
      }
    })
  }

  addUser(user) {
    console.log(user);
  }

  getUsers() {
    return this.firestore.collection('Users').snapshotChanges();
  }
  getUser(key) {
    return this.firestore.doc(`Users/${key}`).valueChanges();
  }
  async updateUser(key) {
    return this.firestore.doc(`Users/${key}`).valueChanges();

    // this.navCtrl.navigateForward(`/user-details/${this.userId}`)

  }
  delUser() {

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
