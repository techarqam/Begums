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
    private feedbackService: FeedbackService,
    private userService: UserService
  ) {
  }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = params['id'];
    });
    // this.getUser();
  }

  // getUser() {
  //   this.userService.getUser(this.userId).subscribe(snap => {
  //     this.user = snap;
  //     console.log(this.user)
  //   })
  // }

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
