import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
import { Observable, Subject } from 'rxjs';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { FeedbackComponent } from '../../Feedback/feedback/feedback.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  searchValue: string = "";

  frstsNum = 10;

  users: Observable<any>;
  showLoader: boolean = true;
  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private feedbackService: FeedbackService,
    private alertCtrl: AlertController,
  ) {
    this.getUsers();

  }
  ngOnInit() {



  }

  search() {
    if (this.searchValue) {
      this.users = this.userService.userSearch(this.searchValue);
    } else {
      this.users = this.userService.getUsers(this.frstsNum);
    }

  }

  getUsers() {
    this.users = this.userService.getUsers(this.frstsNum);
    this.users.subscribe(() => { this.showLoader = false });
  }

  addUser() {
    this.navCtrl.navigateForward('/add-client')
  }

  async confirmFeedback(u) {
    const alert = await this.alertCtrl.create({
      header: 'Request Feedback ? ',
      message: 'Send an SMS requesting Feedback to ' + u.payload.doc.data().Name,
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.feedback(u);
          }
        }
      ]
    });

    await alert.present();
  }



  async feedback(u) {
    this.feedbackService.reqFeedback(u.payload.doc.id).then(() => {
      this.userService.presentToast("SMS Sent");
    });
    // const modal = await this.modalCtrl.create({
    //   component: FeedbackComponent,
    //   componentProps: { user: u.payload.doc.id },
    //   backdropDismiss: false,
    // });
    // return await modal.present();
  }
  userDetails(userKey) {
    this.navCtrl.navigateForward(`/user-details/${userKey}`)
  }
  loadMore() {
    this.frstsNum = this.frstsNum + 10;
    this.getUsers();
  }
}
