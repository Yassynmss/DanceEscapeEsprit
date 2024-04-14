import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';

import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { MfaComponent } from './components/authenticate/mfa/mfa.component';
import { ResetPasswordComponent } from './components/authenticate/reset-password/reset-password.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BanUserComponent } from './components/ban-user/ban-user.component';
import { AffichageComponent } from './component/affichage/affichage.component';
import { PostFeedbackComponent } from './component/post-feedback/post-feedback.component';
import { UpdateFeedbackComponent } from './component/update-feedback/update-feedback.component';
import { AllFeedbackComponent } from './component/all-feedback/all-feedback.component';
import { AlltemplatebackComponent } from './BackOffice/alltemplateback/alltemplateback.component';
import { HomecomponentfrontComponent } from './FrontOffice/homecomponentfront/homecomponentfront.component';
import { AddParticipationComponent } from './add-participation/add-participation.component';
import { EditParticipationComponent } from './edit-participation/edit-participation.component';
import { VoteComponent } from './vote/vote.component';
import { AddVoteComponent } from './add-vote/add-vote.component';
import { FetchpartComponent } from './fetchpart/fetchpart.component';
import { UpdatevoteComponent } from './updatevote/updatevote.component';
import { CastvoteComponent } from './castvote/castvote.component';
import { AppComponent } from './app.component';
import { EventparticipationsComponent } from './eventparticipations/eventparticipations.component';
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
  { path: 'admin', component: AlltemplatebackComponent },
  {path: 'profile' , component:ProfileComponent},
  {
    path:"stats",
    component:StatsComponent 
    },
    {path:'banuser' , component:BanUserComponent},
    {
      path:"affichage",
      component:AffichageComponent
   
     },
     {
      path:"add",
      component:PostFeedbackComponent
    },
    {
      path:"update/:id_resandfeed",
      component:UpdateFeedbackComponent
    },
    {
      path:"addfeedbackandresult",
      component:PostFeedbackComponent
    },
    {
      path:"view",
      component:AllFeedbackComponent
    },
    {
      path:"app",
      component:AppComponent
    },
    {
      path:"admin",
      component:AlltemplatebackComponent,
      children:[{
        path:"addVote",
        component:AddVoteComponent
      },
    {
      path:"list",
      component:FetchpartComponent
    },
    {
      path:"eventparticipations",
      component:EventparticipationsComponent
    },
  {path:"edit-participation/:id",
  component:EditParticipationComponent},
  {path:"votes",
  component: VoteComponent},
  {path:"updateVote/:id",
  component: UpdatevoteComponent},
  {
    path:"add",
    component:AddParticipationComponent
  }
  ]
    },{
      path:"galaxydance",
      component:AlltemplatefrontComponent,
      children:[{
        path:"vote",
        component:CastvoteComponent
      }
  ]
    },
    {
      path:"add",
      component:AddParticipationComponent
    },
    {
      path:"edit-participation/:id",
      component:EditParticipationComponent
    },
    {
        path:"votes",
        component:VoteComponent
      },
      {
          path:"addVote",
          component:AddVoteComponent
        },
        {
          path:"list"
          ,component: FetchpartComponent
        },
        {path: "updateVote/:id",
      component: UpdatevoteComponent},
      {path: "vote",
    component: CastvoteComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }






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

