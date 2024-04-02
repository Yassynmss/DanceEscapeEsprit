import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';
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
import { PartdetailsComponent } from './partdetails/partdetails.component';
const routes: Routes = [
  {
    path:"",
    component: AlltemplatefrontComponent,
    children:[{
      path:"",
      component:HomecomponentfrontComponent
    }]
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
    },
  {
    path:"participationdet",
    component:PartdetailsComponent
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
