import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Users/user.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  userId;
  user;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.userDetails();
  }

  userDetails() {
    this.userService.getUser(this.userId).subscribe(snap=>{
      this.user= snap;
    });
  }
  delConfirmUser(){
  
  }
  delUser(){

  }
  editClient() {
    this.navCtrl.navigateForward(`/edit-user/${this.userId}`)
    } 

}