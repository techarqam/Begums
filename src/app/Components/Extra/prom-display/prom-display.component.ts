import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-prom-display',
  templateUrl: './prom-display.component.html',
  styleUrls: ['./prom-display.component.scss'],
})
export class PromDisplayComponent implements OnInit {
  promId;
  iamge: string;

  constructor(
    private router: ActivatedRoute,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.promId = params['id'];
    });
    this.getProm();
  }

  getProm() {
    this.db.doc(`Festivities/${this.promId}`).snapshotChanges().subscribe(snap => {
      let temp: any = snap.payload.data();
      this.iamge = temp.ImgUrl;
    })
  }
}
