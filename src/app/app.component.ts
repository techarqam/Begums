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
      icon: 'ios-people'
    },
    {
      title: 'Group Promotions',
      url: '/bulk-promotions',
      icon: 'text'
    },
    {
      title: 'Select Member Promotion',
      url: '/select-promotion',
      icon: 'checkbox-outline'
    },
    {
      title: 'Festivals',
      url: '/festivities',
      icon: 'moon'
    },
    {
      title: 'Birthday Template',
      url: '/birthday-template',
      icon: 'list-box'
    },
    {
      title: 'Feedback Template',
      url: '/feedback-template',
      icon: 'list-box'
    },
    {
      title: 'Birthdays',
      url: '/birthdays',
      icon: 'ios-egg'
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
