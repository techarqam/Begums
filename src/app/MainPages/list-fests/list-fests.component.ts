import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-fests',
  templateUrl: './list-fests.component.html',
  styleUrls: ['./list-fests.component.scss'],
})
export class ListFestsComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }
  addFest() {
    this.navCtrl.navigateForward('/add-fest');
  }

}
