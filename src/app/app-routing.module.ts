import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MainPages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { FeedbackComponent } from './Feedback/feedback/feedback.component';
import { AddFestComponent } from './Fests/add-fest/add-fest.component';
import { BulkPromotionComponent } from './Promotion/bulk-promotion/bulk-promotion.component';
import { SelectPromotionComponent } from './Promotion/select-promotion/select-promotion.component';
import { ListFestsComponent } from './MainPages/list-fests/list-fests.component';
import { ListUsersComponent } from './MainPages/list-users/list-users.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { FeedbackTemplateComponent } from './Templates/feedback-template/feedback-template.component';
import { BirthdayTemplateComponent } from './Templates/birthday-template/birthday-template.component';

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
    path: 'bulk-promotion',
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
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent

  },
  //Templates
  {
    path: 'birthday-template',
    component: BirthdayTemplateComponent,

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
