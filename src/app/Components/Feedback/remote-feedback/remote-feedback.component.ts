import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/Users/user.service';
import { AlertController, } from '@ionic/angular';
import { FeedbackComponent } from '../feedback/feedback.component';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';

@Component({
  selector: 'app-remote-feedback',
  templateUrl: './remote-feedback.component.html',
  styleUrls: ['./remote-feedback.component.scss'],
})
export class RemoteFeedbackComponent implements OnInit {

  showLoader: boolean = false;
  userId;
  user;
  constructor(
    private router: ActivatedRoute,
    public alertCtrl: AlertController,
    public feedbackService: FeedbackService,
  ) {
  }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  submitRating() {

  }
  sendFeedback() {
    // if (this.feedbackService.feedbackModel.valid) {
    let temp = this.feedbackService.feedbackModel.value;
    temp.userId = this.userId;
    this.feedbackService.submitRating(temp)
    // .then(() => {
    // })
    // } else {
    //   this.userService.presentToast("Select Stars to Rate Us !!")
    // }
  }


}
