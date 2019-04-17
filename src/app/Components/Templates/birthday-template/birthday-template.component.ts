import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/Services/Templates/template.service';

@Component({
  selector: 'app-birthday-template',
  templateUrl: './birthday-template.component.html',
  styleUrls: ['./birthday-template.component.scss'],
})
export class BirthdayTemplateComponent implements OnInit {

  birthTemp;

  showEdit = false;
  showLoader: boolean = true;

  constructor(
    private tempService: TemplateService,
  ) { }

  ngOnInit() {
    this.tempService.getBirthTemp().subscribe(snap => {
      this.birthTemp = snap.payload.data();
    })
    this.showLoader = false;
  }
  editTrue() {
    this.showEdit = !this.showEdit;
    this.tempService.birthTempModal.reset();
  }

  upadateBirthTemp() {
    if (this.tempService.birthTempModal.valid) {
      this.showLoader = true;

      let temp = this.tempService.birthTempModal.value;
      this.tempService.updateBirthTemp(temp).then(() => {
        this.tempService.birthTempModal.reset();
        this.showEdit = false;
        this.showLoader = false;

        this.tempService.presentToast("Birthday Template Updated");
      });
    } else {
      this.tempService.presentToast("Enter a valid Message");
    }
  }



}
