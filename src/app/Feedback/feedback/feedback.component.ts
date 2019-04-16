import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  constructor(
    private feedbackService: FeedbackService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }
  submitRating() {
    let temp = this.feedbackService.feedbackModel.value;
    this.feedbackService.submitRating(temp);
    console.log(temp);
  }



  close() {
    this.modalCtrl.dismiss();
  }
}
