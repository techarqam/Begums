import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private logoutService: LoginService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() { }


  gtClients() {
    this.navCtrl.navigateForward("/clients")
  }
  gtbulkPromotions() { }
  gtPromotionsS() { }
  gtfest() {
    this.navCtrl.navigateForward("/festivities")

  }


  signOut() {
    this.logoutService.logOut();
  }
}
