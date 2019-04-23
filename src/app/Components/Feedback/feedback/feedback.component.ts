import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  key = this.navParams.get("user");

  constructor(
    public feedbackService: FeedbackService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
  ) {
    console.log(this.key)
  }

  ngOnInit() { }
  submitRating() {
    let temp = this.feedbackService.feedbackModel.value;
    this.feedbackService.submitRating(temp);
  }



  close() {
    this.modalCtrl.dismiss();
  }
}
