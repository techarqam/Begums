import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavParams, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-birthday-people',
  templateUrl: './view-birthday-people.component.html',
  styleUrls: ['./view-birthday-people.component.scss'],
})
export class ViewBirthdayPeopleComponent implements OnInit {

  key = this.navParams.get("key");

  people: Observable<any>;

  constructor(
    private db: AngularFirestore,
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.key);
    this.people = this.db.collection('BDs').doc(this.key.id).collection("Clients").snapshotChanges();

  }
  close() {
    this.modalCtrl.dismiss();
  }
}
