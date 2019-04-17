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

  checkData() {
    if (this.userService.user.valid) {
      this.updateUser();
    } else {
      this.userService.presentToast("Details not valid")
    }
  }
  updateUser() {
    let temp = this.userService.user.value;
    this.userService.updateUser(temp);
  }
  delConfirmUser() { }
  //   let confirm = this.alertCtrl.create({
  //     title: 'Are you sure you want to Delete Client ?',
  //     message: 'This data cannot be recovered again.',
  //     buttons: [
  //       {
  //         text: 'No, Its a mistake',
  //         handler: () => {

  //         }
  //       },
  //       {
  //         text: "Yes, I'm sure",
  //         handler: () => {
  //           this.delUser();
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  //  }
  delUser() {

  }

}

