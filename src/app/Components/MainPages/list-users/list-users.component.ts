import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
import { Observable, Subject } from 'rxjs';
import { NavController, ModalController } from '@ionic/angular';
import { FeedbackComponent } from '../../Feedback/feedback/feedback.component';
import { AngularFirestore } from '@angular/fire/firestore';


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
    private modalCtrl: ModalController,
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

  async feedback(u) {
    const modal = await this.modalCtrl.create({
      component: FeedbackComponent,
      backdropDismiss: false,
    });
    return await modal.present();

  }
  userDetails(userKey) {
    // console.log(userKey);
    this.navCtrl.navigateForward(`/user-details/${userKey}`)
  }
  loadMore() {
    this.frstsNum = this.frstsNum + 10;
    this.getUsers();
  }
}
