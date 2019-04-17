import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  signIn = new FormGroup({
    Email: new FormControl("", Validators.required),
    Pass: new FormControl("", Validators.required)
  });


  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public toastCtrl: ToastController,

  ) { }






  login(user) {
    return this.fireAuth.auth.signInWithEmailAndPassword(user.Email, user.Pass)
      .catch((e) => {
        this.presentToast(e.message);
      }).then(() => {

        this.fireAuth.authState.pipe(first()).pipe(
          tap(user => {
            if (user) {
              console.log(user.email);
              window.location.href = "/dashboard";
            }
          })
        ).subscribe();
      })

  }


  logOut() {
    this.fireAuth.auth.signOut().then(() => {
      window.location.href = "/login";
      this.presentToast("Logged Out")
    });
  }


  //Support
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: "bottom",
      showCloseButton: false,
    });
    toast.present();
  }
}
