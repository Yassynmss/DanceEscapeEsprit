import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';
import { AlltemplatebackComponent } from './BackOffice/alltemplateback/alltemplateback.component';
import { HomecomponentfrontComponent } from './FrontOffice/homecomponentfront/homecomponentfront.component';
import { EventComponent } from './event/event.component';
import { EventaddComponent } from './eventadd/eventadd.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { DancecategorieComponent } from './dancecategorie/dancecategorie.component';
import { DanceaddComponent } from './danceadd/danceadd.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AddNewDanceCategorieFrontComponent } from './add-new-dance-categorie-front/add-new-dance-categorie-front.component';
import { ViewSheduleComponent } from './view-shedule/view-shedule.component';

const routes: Routes = [
  {
    path:"welcome",
    component: AlltemplatefrontComponent,
    children:[{
      path:"all",
      component:HomecomponentfrontComponent
    },{
      path:"index",
      component:EventComponent
    },{
      path:"newDance",
      component:AddNewDanceCategorieFrontComponent
    },{
      path:"view",
      component:ViewSheduleComponent
    }]
  },
  {
    path:"admin",
    component:AlltemplatebackComponent,
    children:[{
      path:"indexeventback",
      component:EventComponent
    },{

      path:"addEventBack",
      component:EventaddComponent
    },
    {
      path:"indexDanceBack",
      component:DancecategorieComponent

    },{
      path:"addDanceBack",
      component:DanceaddComponent
    },{
      path:"event/:id_event",
    component:EventupdateComponent
    },{

      path:"searcheventback",
      component:SearchbarComponent
    },{
      path:"view",
      component:ViewSheduleComponent
    }]
  },

  {
    path:"aaa",
    component:EventComponent
  },

  {
    path:"addEvent",
    component:EventaddComponent
  },

  {
    path:"updateEvent",
    component:EventupdateComponent
  },
  {
    path:"updateEvent",
    component:EventupdateComponent
  },{
    path:"event/:id_event",
    component:EventupdateComponent
  },{
    path:"danceCategories/:id_dance_categorie",
    component:DancecategorieComponent
  },{
    path:"view",
    component:ViewSheduleComponent
  },{
    path:"addDanceCategorieforuser",
    component:AddNewDanceCategorieFrontComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
