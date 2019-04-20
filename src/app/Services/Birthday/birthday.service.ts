import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  template;

  constructor(
    private db: AngularFirestore,
  ) {
    this.getTemplate();
  }

  getBirthDays() {
    return this.db.collection('BDs', ref => ref.limit(10)).valueChanges();
  }
  getTemplate() {
    this.db.doc(`Templates/Birthday`).snapshotChanges().subscribe(snap => {
      let temp: any = snap.payload.data();
      this.template = temp.Message;
      console.log(this.template)
    })
  }
  sendBirthDayWishes() {

  }

}
