import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {


  showLoader: boolean = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() { }




  checkData() {
    let tempUser = this.userService.user.value;

    let tStrng: string = String(tempUser.Phone);
    if (tempUser.Name) {
      if (tStrng.length == 10) {
        tempUser.Name = tempUser.Name.toLowerCase();
        tempUser.Phone = tStrng;
        this.addUser(tempUser);
      } else { this.userService.presentToast("Phone Number not Valid"); }
    } else { this.userService.presentToast("Name not Valid"); }
  }



  addUser(tempU) {
    this.showLoader = true;
    this.userService.checkUser(tempU).then(() => {
      this.userService.user.reset();
    });
    this.showLoader = false;
  }









}
