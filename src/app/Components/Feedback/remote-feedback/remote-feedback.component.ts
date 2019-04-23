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
    private userService: UserService,
  ) {
  }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.userDetails();
  }


  userDetails() {
    this.userService.getUser(this.userId).subscribe(snap => {
      this.user = snap;
    });
  }

  async sendFeedback() {
    if (this.feedbackService.feedbackModel.valid) {

      let temp = this.feedbackService.feedbackModel.value;
      temp.userId = this.userId;
      let avgRating: number = 0;
      let totR: number = 1;
      if (this.user.TotalRatings) {
        totR = +this.user.TotalRatings + 1;
      }
      if (this.user.AverageRatings) {
        avgRating = ((this.user.AverageRatings * this.user.TotalRatings) + temp.rating) / totR;
      } else {
        avgRating = temp.rating;
      }

      temp.TotalRatings = totR;
      temp.AverageRatings = avgRating;

      console.log(avgRating)






    } else {
      this.userService.presentToast("Select Stars to Rate Us !!")
    }

  }


}
