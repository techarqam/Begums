import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/Users/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {

  userId;
  user;

  showLoader: boolean = false;

  constructor(
    private router: ActivatedRoute,
    public alertCtrl: AlertController,
    private userService: UserService,
    private toastCtrl: ToastController
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe(snap => {
      this.user = snap;
      this.userService.user.setValue(this.user);
    })
  }

  updateUser() {
    let temp = this.userService.user.value;
    if (temp.Name) {
      temp.key = this.userId;

      this.showLoader = true;

      this.userService.updateUser(temp).then(() => {
        this.showLoader = false;
      });
    } else {
      this.userService.presentToast("Enter a Name for the User");
    }
  }
  async delConfirmUser() {

    const alert = await this.alertCtrl.create({
      header: 'Are you sure you want to Delete Client ?',
      message: 'This data cannot be recovered again.',
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: "Yes, I'm sure",
          handler: () => {
            this.delUser();
          }
        }
      ]
    });

    await alert.present();

  }
  delUser() {
    this.userService.delUser(this.userId);
  }

}

