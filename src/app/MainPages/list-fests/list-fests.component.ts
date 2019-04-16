import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FestivitiesService } from 'src/app/Services/Festivities/festivities.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-fests',
  templateUrl: './list-fests.component.html',
  styleUrls: ['./list-fests.component.scss'],
})
export class ListFestsComponent implements OnInit {

  fests: Observable<any>;

  constructor(
    private navCtrl: NavController,
    private festService: FestivitiesService,
  ) { }

  ngOnInit() {
    this.fests = this.festService.getFests();


    // this.fests = this.festService.getFests().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }))
    // );

  }


  addFest() {
    this.navCtrl.navigateForward('/add-fest');
  }
  delFest(fest) {
    this.festService.confirmDelete(fest);
  }
}
