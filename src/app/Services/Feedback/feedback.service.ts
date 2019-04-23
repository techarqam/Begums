import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import *as moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessagingService } from '../Messaging/messaging.service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedTemplate: string;

  feedbackModel = new FormGroup({
    rating: new FormControl("", Validators.required),
    comment: new FormControl(""),
    timeStamp: new FormControl(moment().format())
  })
  constructor(
    private db: AngularFirestore,
    private messagingService: MessagingService,
  ) {
    this.getTemplate();
  }


  getTemplate() {
    this.db.doc(`Templates/Feedback`).snapshotChanges().subscribe(snap => {
      let temp: any = snap.payload.data();
      this.feedTemplate = temp.Message;
    })
  }


  reqFeedback(phone) {
    this.feedTemplate = this.feedTemplate + "\nbegums.tk/ufb/" + phone;
    return this.messagingService.sendMessage(this.feedTemplate, phone);
  }


  submitRating(feedback) {
    console.log(feedback);
  }
}
