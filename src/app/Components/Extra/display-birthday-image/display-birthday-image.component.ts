import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-display-birthday-image',
  templateUrl: './display-birthday-image.component.html',
  styleUrls: ['./display-birthday-image.component.scss'],
})
export class DisplayBirthdayImageComponent implements OnInit {


  bImag: string = "";

  constructor(
    public db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.db.doc(`Templates/BirthdayImage`).snapshotChanges().subscribe(snap => {
      let temp: any = snap.payload.data();
      this.bImag = temp.ImageUrl;
      console.log(this.bImag)
    })
  }

}
