import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './MainPages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { FeedbackComponent } from './Feedback/feedback/feedback.component';
import { BulkPromotionComponent } from './Promotion/bulk-promotion/bulk-promotion.component';
import { SelectPromotionComponent } from './Promotion/select-promotion/select-promotion.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { ListUsersComponent } from './MainPages/list-users/list-users.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { AddFestComponent } from './Fests/add-fest/add-fest.component';
import { ListFestsComponent } from './MainPages/list-fests/list-fests.component';
import * as firebase from 'firebase';
import { LoginService } from './Services/Auth/login.service';
import { UserService } from './Services/Users/user.service';
import { BirthdayService } from './Services/Birthday/birthday.service';
import { MessagingService } from './Services/Messaging/messaging.service';
import { HttpClientModule } from '@angular/common/http';
import { FestivitiesService } from './Services/Festivities/festivities.service';
// import { StarRatingModule } from 'ionic3-star-rating';

firebase.initializeApp({
  apiKey: "AIzaSyBYaBFDld1wDlnY0mYz0LsFfOXuRBXoM5M",
  authDomain: "begums-crm.firebaseapp.com",
  databaseURL: "https://begums-crm.firebaseio.com",
  projectId: "begums-crm",
  storageBucket: "begums-crm.appspot.com",
  messagingSenderId: "464293639017"
})


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FeedbackComponent,
    BulkPromotionComponent,
    SelectPromotionComponent,
    AddUserComponent,
    ListUsersComponent,
    EditUserComponent,
    UserDetailsComponent,
    AddFestComponent,
    ListFestsComponent,
    LoginComponent,
    FeedbackComponent,

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    // StarRatingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    UserService,
    BirthdayService,
    MessagingService,
    FestivitiesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
