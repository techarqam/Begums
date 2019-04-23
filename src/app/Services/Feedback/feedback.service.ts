import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import *as moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessagingService } from '../Messaging/messaging.service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedTemplate: string = "";

  feedbackModel = new FormGroup({
    LastRating: new FormControl("", Validators.required),
    LastComment: new FormControl(""),
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


  async reqFeedback(phone) {
    let tempArray: Array<any> = [];
    tempArray.push(phone);
    this.feedTemplate = this.feedTemplate + "%0A" + "http://begums.tk/ufb/" + phone;
    return this.messagingService.sendMessage(this.feedTemplate, tempArray);
  }


  async submitRating(feedback) {
    return this.db.collection("Users")
      .doc(feedback.Phone).set(feedback, { merge: true })
      
      
      // console.log(feedback);
  }
}
