import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
import { Observable } from 'rxjs';
import { NavController, ModalController } from '@ionic/angular';
import { FeedbackComponent } from '../../Feedback/feedback/feedback.component';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

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
  getUsers() {
    this.users = this.userService.getUsers();
    this.users.subscribe(() => { this.showLoader = false });
  }
  initializeItems(): void {
  }
  addUser() {
    this.navCtrl.navigateForward('/add-client')
  }
  getItems(searchbar) {

  }
  async feedback(u) {
    const modal = await this.modalCtrl.create({
      component: FeedbackComponent,
      backdropDismiss: false,
    });
    return await modal.present();

  }
  userDetails(userKey){
    // console.log(userKey);
    this.navCtrl.navigateForward(`/user-details/${userKey}`)
  }
}
