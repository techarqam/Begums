import { Component, OnInit } from '@angular/core';
import { BirthdayService } from 'src/app/Services/Birthday/birthday.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { ViewBirthdayPeopleComponent } from '../view-birthday-people/view-birthday-people.component';

@Component({
  selector: 'app-display-birthdays',
  templateUrl: './display-birthdays.component.html',
  styleUrls: ['./display-birthdays.component.scss'],
})
export class DisplayBirthdaysComponent implements OnInit {

  bds: Array<any> = [];
  showLoader: boolean = true;


  constructor(
    private modalCtrl: ModalController,
    private db: AngularFirestore,
  ) {
    this.db.collection('BDs', ref => ref.orderBy("TimeStamp", "asc")).snapshotChanges().subscribe(snap => {
      snap.forEach(snip => {
        let b: any = snip.payload.doc.data();
        b.id = snip.payload.doc.id;
        let year: number = +b.id.substring(0, 4);
        let month: number = +b.id.substring(4, 6);
        let by: number = +b.id.substring(6, 8);
        b.Dis = (month + "-" + by + "-" + year);
        this.bds.push(b);
      })
    });
    this.showLoader = false;
  }

  ngOnInit() { }

  async viewBds(b) {


    const modal = await this.modalCtrl.create({
      component: ViewBirthdayPeopleComponent,
      componentProps: { key: b },
      backdropDismiss: false,
    });
    return await modal.present();
  }
}
