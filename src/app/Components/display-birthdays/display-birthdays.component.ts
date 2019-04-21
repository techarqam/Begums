import { Component, OnInit } from '@angular/core';
import { BirthdayService } from 'src/app/Services/Birthday/birthday.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-birthdays',
  templateUrl: './display-birthdays.component.html',
  styleUrls: ['./display-birthdays.component.scss'],
})
export class DisplayBirthdaysComponent implements OnInit {

  bds;


  constructor(
    private birthService: BirthdayService,
  ) {
    // this.birthService.getBirthDays().subscribe(snap => {
    //   console.log(snap)
    //   this.bds = snap;
    // });
  }

  ngOnInit() { }

}
