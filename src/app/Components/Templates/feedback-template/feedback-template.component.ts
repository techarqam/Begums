import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemplateService } from 'src/app/Services/Templates/template.service';

@Component({
  selector: 'app-feedback-template',
  templateUrl: './feedback-template.component.html',
  styleUrls: ['./feedback-template.component.scss'],
})
export class FeedbackTemplateComponent implements OnInit {

  feedTemp;

  showEdit = false;
  showLoader: boolean = true;

  constructor(
    private tempService: TemplateService,
  ) { }

  ngOnInit() {
    this.feedTemp = this.tempService.getFeedTemp().subscribe(snap => {
      this.feedTemp = snap.payload.data();
    })
    this.showLoader = false;
  }
  editTrue() {
    this.showEdit = !this.showEdit;
    this.tempService.birthTempModal.reset();
  }

  upadateFeedTemp() {
    if (this.tempService.FeedbackTempModal.valid) {
      this.showLoader = true;

      let temp = this.tempService.FeedbackTempModal.value;
      this.tempService.updateFeedTemp(temp).then(() => {
        this.tempService.FeedbackTempModal.reset();
        this.showEdit = false;
        this.showLoader = false;

        this.tempService.presentToast("Feedback Template Updated");
      });

    } else {
      this.tempService.presentToast("Enter a valid Message");
    }
  }


}
