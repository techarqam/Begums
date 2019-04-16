import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FestivitiesService {
  festModal = new FormGroup({
    festivalName: new FormControl(""),
    Date: new FormControl(""),
    Status: new FormControl(""),
    ImgUrl: new FormControl(""),
    TimeStamp: new FormControl(moment().format()),
  })

  constructor(
    // private firestore: AngularFirestore,
    // private storage: AngularFireStorage,
  ) { }



  addFest(fimg) {
    // this.storage.ref("Festivities").put("kss")
    console.log(fimg);
  }
}
