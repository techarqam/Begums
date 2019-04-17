import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit() { }


  checkData() {
    if (this.loginService.signIn.valid) {
      this.login();
    } else {
      this.loginService.presentToast("Wrong Credentials")
    }
  }


  login() {
    let user = this.loginService.signIn.value;
    this.loginService.login(user);
    this.loginService.signIn = null;
  }

}