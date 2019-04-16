import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FestivitiesService {

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
  ) { }



  addFest(fimg) {
    this.storage.ref("Festivities").put("kss")
  }
}
