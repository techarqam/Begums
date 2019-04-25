import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, NavController, ModalController } from '@ionic/angular';
import * as  moment from 'moment';
import { FeedbackComponent } from 'src/app/Components/Feedback/feedback/feedback.component';
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
    private modalCtrl: ModalController,
  ) { }


  userSearch(searchValue) {
    return this.firestore.collection(`Users`, ref => ref.orderBy("Name")
      .startAt(searchValue.toLowerCase()).endAt(searchValue.toLowerCase() + "\uf8ff")
      .limit(10))
      .snapshotChanges();

  }



  checkUser(user) {
    let tStrng: string = String(user.Phone);
    return new Promise((resolve, reject) => {

      this.firestore.collection("Users").doc(tStrng).get().subscribe(snip => {
        if (snip.exists) {
          this.presentToast("Phone Number already exists !!")
          reject(true);
        } else {
          this.addUser(user);
          resolve(true);
        }
      })
    });

  }

  async addUser(user) {
    let phoneNum = user.Phone;
    return this.firestore.collection("Users").doc(phoneNum).set(user)

      .then(() => {
        this.presentToast("User Created");
        this.navCtrl.navigateRoot("/clients").then(() => {
          this.feedback(user);
        });
      });
  }

  getUsers(num) {
    return this.firestore.collection('Users', ref => ref.orderBy("Name")).snapshotChanges();
  }
  getallUsers() {
    return this.firestore.collection('Users').valueChanges();
  }
  getUser(key) {
    return this.firestore.doc(`Users/${key}`).valueChanges();
  }
  async updateUser(user) {

    return this.firestore.collection("Users")
      .doc(user.key).set({ Name: user.Name.toLowerCase(), DOB: user.DOB }, { merge: true })

      .then(() => {
        this.navCtrl.navigateForward(`/user-details/${user.key}`)
      });

  }
  delUser(key) {
    this.firestore.doc(`Users/${key}`).delete().then(() => {
      this.navCtrl.navigateRoot('/clients');
    })
  }

  async feedback(u) {
    const modal = await this.modalCtrl.create({
      component: FeedbackComponent,
      backdropDismiss: false,
    });
    return await modal.present();

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
