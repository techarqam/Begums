import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import *as moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbackModel = new FormGroup({
    rating: new FormControl(""),
    comment: new FormControl("", Validators.required),
    timeStamp: new FormControl(moment().format())
  })
  constructor(
    private firestore: AngularFirestore,

  ) { }




  submitRating(feedback) {
    console.log(feedback);
    // return this.firestore.collection("Users").dic
  }
}
