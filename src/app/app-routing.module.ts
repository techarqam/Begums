import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { FeedbackComponent } from './Components/Feedback/feedback/feedback.component';
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


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'feedback',
    component: FeedbackComponent
    },
  {
    path: 'add-fest',
    component: AddFestComponent
  },

  {
    path: 'bulk-promotions',
    component: BulkPromotionComponent
  },

  {
    path: 'select-promotion',
    component: SelectPromotionComponent
  },

  {
    path: 'festivities',
    component: ListFestsComponent
  },

  {
    path: 'clients',
    component: ListUsersComponent
  },
  {
    path: 'add-client',
    component: AddUserComponent
  },

  {
    path: 'edit-user/:id',
    component: EditUserComponent
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent

  },
  //Templates
  {
    path: 'birthday-template',
    component: BirthdayTemplateComponent

  },
  {
    path: 'feedback-template',
    component: FeedbackTemplateComponent

  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
