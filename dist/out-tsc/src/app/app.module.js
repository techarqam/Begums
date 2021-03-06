import * as tslib_1 from "tslib";
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
import * as firebase from 'firebase';
import { LoginService } from './Services/Auth/login.service';
import { UserService } from './Services/Users/user.service';
import { BirthdayService } from './Services/Birthday/birthday.service';
import { MessagingService } from './Services/Messaging/messaging.service';
import { HttpClientModule } from '@angular/common/http';
import { FestivitiesService } from './Services/Festivities/festivities.service';
import { LoaderComponent } from './Components/UI/loader/loader.component';
import { FeedbackService } from './Services/Feedback/feedback.service';
import { TemplateService } from './Services/Templates/template.service';
import { PromotionsService } from './Services/Promotions/promotions.service';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';
import { FeedbackComponent } from './Components/Feedback/feedback/feedback.component';
import { BulkPromotionComponent } from './Components/Promotion/bulk-promotion/bulk-promotion.component';
import { SelectPromotionComponent } from './Components/Promotion/select-promotion/select-promotion.component';
import { AddUserComponent } from './Components/Users/add-user/add-user.component';
import { ListUsersComponent } from './Components/MainPages/list-users/list-users.component';
import { EditUserComponent } from './Components/Users/edit-user/edit-user.component';
import { UserDetailsComponent } from './Components/Users/user-details/user-details.component';
import { AddFestComponent } from './Components/Fests/add-fest/add-fest.component';
import { ListFestsComponent } from './Components/MainPages/list-fests/list-fests.component';
import { BirthdayTemplateComponent } from './Components/Templates/birthday-template/birthday-template.component';
import { FeedbackTemplateComponent } from './Components/Templates/feedback-template/feedback-template.component';
import { LoginGGuard } from './Guards/login-g.guard';
import { LoginComponent } from './Components/Auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { RemoteFeedbackComponent } from './Components/Feedback/remote-feedback/remote-feedback.component';
import { DisplayBirthdaysComponent } from './Components/display-birthdays/display-birthdays.component';
// import { IonicRatingModule } from 'ionic4-rating';
// import { IonicRatingModule } from 'ionic-rating';
import { BarRatingModule } from "ngx-bar-rating";
import { ViewBirthdayPeopleComponent } from './Components/view-birthday-people/view-birthday-people.component';
firebase.initializeApp({
    apiKey: "AIzaSyBYaBFDld1wDlnY0mYz0LsFfOXuRBXoM5M",
    authDomain: "begums-crm.firebaseapp.com",
    databaseURL: "https://begums-crm.firebaseio.com",
    projectId: "begums-crm",
    storageBucket: "begums-crm.appspot.com",
    messagingSenderId: "464293639017"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                DashboardComponent,
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
                LoaderComponent,
                BirthdayTemplateComponent,
                FeedbackTemplateComponent,
                RemoteFeedbackComponent,
                DisplayBirthdaysComponent,
                ViewBirthdayPeopleComponent,
            ],
            entryComponents: [
                LoaderComponent,
                RemoteFeedbackComponent,
                ViewBirthdayPeopleComponent,
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                ReactiveFormsModule,
                BarRatingModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule,
                FormsModule,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                LoginService,
                UserService,
                BirthdayService,
                MessagingService,
                FestivitiesService,
                FeedbackService,
                TemplateService,
                PromotionsService,
                LoginGGuard,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map