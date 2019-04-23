import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { NavController, MenuController } from '@ionic/angular';
import { BirthdayService } from 'src/app/Services/Birthday/birthday.service';
import { FeedbackService } from 'src/app/Services/Feedback/feedback.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private logoutService: LoginService,
    public navCtrl: NavController,
    public birthdayService: BirthdayService,
    public menuCrtl: MenuController,
    public feedbackService : FeedbackService,
  ) {
    this.menuCrtl.enable(true);
  }

  ngOnInit() {
    this.birthdayService.sendBirthDayWishes().then(() => {
      this.birthdayService.sendFestivities();
    });
    // this.feedbackService.bDb();
  }








  viewMenu() {
    this.menuCrtl.open();
  }



  gtClients() {
    this.navCtrl.navigateForward("/clients")
  }
  gtbulkPromotions() {
    this.navCtrl.navigateForward("/bulk-promotions");
  }
  gtPromotionsS() {
    this.navCtrl.navigateForward("/select-promotion");
  }
  gtfest() {
    this.navCtrl.navigateForward("/festivities")

  }


  signOut() {
    this.logoutService.logOut();
  }
}
