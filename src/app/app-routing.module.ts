import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';
import { HomecomponentfrontComponent } from './FrontOffice/homecomponentfront/homecomponentfront.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { MfaComponent } from './components/authenticate/mfa/mfa.component';
import { ResetPasswordComponent } from './components/authenticate/reset-password/reset-password.component';
import { UserComponent } from './user/user.component';
import { AlltemplatebackComponent } from './BackOffice/alltemplateback/alltemplateback.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StatsComponent } from './stats/stats.component';
const routes: Routes = [

  {
    path:"forbiden",
    component:ForbiddenComponent
  },
 { path:"",
  component:AlltemplatefrontComponent,
  children:[

  ]
 },
  {
    path: 'login',
    component: AuthenticateComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'mfa',
    //canActivate: [AuthGuard],
    component: MfaComponent, canActivate:[AuthGuard]
  },
  {
    path:'front', component:AlltemplatefrontComponent
  },
  {
    path:'reset-password', component:ResetPasswordComponent
  },
  {
    path:'use1r',
    component: UserComponent , canActivate:[AuthGuard],data:{roles:['USER']}
   },
   {
    path: 'admin1',
    component: AlltemplatebackComponent, canActivate:[AuthGuard],data:{roles:['ADMIN']}
  },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path: 'profile' , component:UserProfileComponent},
  {
    path:"stats",
    component:StatsComponent 
    }
];
/*const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthenticateComponent },
  { path: 'register', component: RegisterComponent },
 // { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }