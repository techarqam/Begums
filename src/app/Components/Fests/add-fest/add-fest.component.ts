import { Component, OnInit } from '@angular/core';
import { FestivitiesService } from 'src/app/Services/Festivities/festivities.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-fest',
  templateUrl: './add-fest.component.html',
  styleUrls: ['./add-fest.component.scss'],
})
export class AddFestComponent implements OnInit {

  img1: any;
  img2: any;
  url: any;
  showLoader: boolean = false;

  constructor(
    private festService: FestivitiesService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }



  checkFest() {
    this.addFest();
  }


  addFest() {
    this.showLoader = true;
    if (this.festService.festModal.valid) {
      let temp = this.festService.festModal.value;
      temp.Image = this.img2;
      this.festService.addFest(temp).then(() => {

        this.festService.festModal.reset();
        this.showLoader = false;
        this.navCtrl.navigateRoot('/festivities');
      })
    } else {
      this.festService.presentToast("Please complete the Required Details")
    }
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
