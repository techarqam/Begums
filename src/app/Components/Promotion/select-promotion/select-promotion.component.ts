import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/Services/Users/user.service';
import { Observable, Subject } from 'rxjs';
import { MessagingService } from 'src/app/Services/Messaging/messaging.service';

@Component({
  selector: 'app-select-promotion',
  templateUrl: './select-promotion.component.html',
  styleUrls: ['./select-promotion.component.scss'],
})
export class SelectPromotionComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  users: Observable<any>;
  frstsNum = 10;
  showLoader: boolean = true;
  searchValue: string = "";
  selArray: Array<any> = [];
  mess: string = '';

  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    public messageService: MessagingService,
  ) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
    this.getUsers();

  }
  gtNextCheck() {
    if (this.selArray.length) {
      this.gtNext();
    } else {
      this.userService.presentToast("Select atleast 1 Client");
    }
  }
  addToArr(a, id) {
    switch (a) {
      case true: this.selArray.push(id);
        break;
      case false: this.rmFrmArray(id);
        break;
    }
  }

  rmFrmArray(Phone) {
    var ind = this.selArray.indexOf(Phone);
    this.selArray.splice(ind, 1)
  }
  checkData() {
    if (this.mess) {
      this.sendConfirm();
    }
  }


  async sendConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Send Message to selected Clients ?',
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: "Yes, I'm sure",
          handler: () => {
            this.sendSMS();
          }
        }
      ]
    });
    await alert.present();
  }


  async sendSMS() {
    await this.messageService.sendMessage(this.mess, this.selArray).then(() => {
      this.navCtrl.navigateRoot('/dashboard').then(() => {
        this.userService.presentToast("Messages sent");
      })
    })
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
  loadMore() {
    this.frstsNum = this.frstsNum + 10;
    this.getUsers();
  }
  addUser() {
    this.navCtrl.navigateForward('/add-client')
  }

  gtNext() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 500);
    this.slides.lockSwipes(true);
  }

  gtPrev() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 500);
    this.slides.lockSwipes(true);

  }
}
