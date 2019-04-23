import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';
import { AddFestComponent } from './Components/Fests/add-fest/add-fest.component';
import { BulkPromotionComponent } from './Components/Promotion/bulk-promotion/bulk-promotion.component';
import { SelectPromotionComponent } from './Components/Promotion/select-promotion/select-promotion.component';
import { ListFestsComponent } from './Components/MainPages/list-fests/list-fests.component';
import { ListUsersComponent } from './Components/MainPages/list-users/list-users.component';
import { AddUserComponent } from './Components/Users/add-user/add-user.component';
import { UserDetailsComponent } from './Components/Users/user-details/user-details.component';
import { BirthdayTemplateComponent } from './Components/Templates/birthday-template/birthday-template.component';
import { FeedbackTemplateComponent } from './Components/Templates/feedback-template/feedback-template.component';
import { EditUserComponent } from './Components/Users/edit-user/edit-user.component';
import { LoginGGuard } from './Guards/login-g.guard';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RemoteFeedbackComponent } from './Components/Feedback/remote-feedback/remote-feedback.component';
import { DisplayBirthdaysComponent } from './Components/display-birthdays/display-birthdays.component';
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //   path: 'feedback',
    //   component: FeedbackComponent,
    //   canActivate: [LoginGGuard],
    // },
    {
        path: 'add-fest',
        component: AddFestComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'bulk-promotions',
        component: BulkPromotionComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'select-promotion',
        component: SelectPromotionComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'festivities',
        component: ListFestsComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'clients',
        component: ListUsersComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'add-client',
        component: AddUserComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'edit-user/:id',
        component: EditUserComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'user-details/:id',
        component: UserDetailsComponent,
        canActivate: [LoginGGuard],
    },
    //Templates
    {
        path: 'birthday-template',
        component: BirthdayTemplateComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'feedback-template',
        component: FeedbackTemplateComponent,
        canActivate: [LoginGGuard],
    },
    {
        path: 'ufb',
        component: RemoteFeedbackComponent,
    },
    {
        path: 'birthdays',
        component: DisplayBirthdaysComponent,
        canActivate: [LoginGGuard],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map