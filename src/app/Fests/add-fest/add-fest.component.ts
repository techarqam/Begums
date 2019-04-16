import { Component, OnInit } from '@angular/core';
import { FestivitiesService } from 'src/app/Services/Festivities/festivities.service';

@Component({
  selector: 'app-add-fest',
  templateUrl: './add-fest.component.html',
  styleUrls: ['./add-fest.component.scss'],
})
export class AddFestComponent implements OnInit {

  img1: any;
  img2: any;
  url: any;

  constructor(
    private festService: FestivitiesService,
  ) { }

  ngOnInit() { }



  checkFest() {

  }


  addFest() {
    
    this.festService.addFest(this.img2);
  }

  //Image Uploading Section
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
  //Image Uploading Section Ended
}
