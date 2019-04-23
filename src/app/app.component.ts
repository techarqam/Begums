import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'ios-analytics'
    },
    {
      title: 'Clients',
      url: '/clients',
      icon: 'ios-cash'
    },
    {
      title: 'Group Promotions',
      url: '/bulk-promotions',
      icon: 'ios-cash'
    },
    {
      title: 'Select Member Promotion',
      url: '/select-promotion',
      icon: 'md-cart'
    },
    {
      title: 'Festivals',
      url: '/festivities',
      icon: 'logo-buffer'
    },
    {
      title: 'Birthday Template',
      url: '/profile',
      icon: 'ios-person'
    },
    {
      title: 'Feedback Template',
      url: '/faqs',
      icon: 'help'
    },
    {
      title: 'Birthdays',
      url: '/birthdays',
      icon: 'help'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
