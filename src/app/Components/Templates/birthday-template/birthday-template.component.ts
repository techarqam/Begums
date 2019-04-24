import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/Services/Templates/template.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-birthday-template',
  templateUrl: './birthday-template.component.html',
  styleUrls: ['./birthday-template.component.scss'],
})
export class BirthdayTemplateComponent implements OnInit {

  birthTemp;

  showEdit = false;
  showLoader: boolean = true;

  img1: any;
  img2: any;

  bImg;

  uploadLoader: boolean = false;


  constructor(
    public tempService: TemplateService,
  ) { }

  ngOnInit() {
    this.tempService.getBirthTemp().subscribe(snap => {
      this.birthTemp = snap.payload.data();
    })
    this.showLoader = false;
    this.getBirthdayImage();
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


  getBirthdayImage() {
    this.tempService.getBirthdayImage().subscribe(snap => {
      let temp: any = snap.payload.data();
      this.bImg = temp.ImageUrl;
    });
  }

  upload() {
    this.uploadLoader = true;
    this.tempService.uploadBImage(this.img2).then(() => {
      this.img1 = null;
      this.img2 = null;
    }).then(() => {
      this.uploadLoader = false;
    });
  }


  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    this.img2 = file;
  }



  removeImage() {
    this.img1 = null;
  }
}
