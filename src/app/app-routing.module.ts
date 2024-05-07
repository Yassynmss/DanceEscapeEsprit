
import { Component, NgModule } from '@angular/core';
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
import { AddNewDanceCategorieFrontComponent } from './add-new-dance-categorie-front/add-new-dance-categorie-front.component';
import { ViewSheduleComponent } from './view-shedule/view-shedule.component';
import { EventaddComponent } from './eventadd/eventadd.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { DancecategorieComponent } from './dancecategorie/dancecategorie.component';
import { DanceaddComponent } from './danceadd/danceadd.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UpdateSupplierComponent } from './component/supplier/update-supplier/update-supplier.component';
import { ListSupplierComponent } from './component/supplier/list-supplier/list-supplier.component';
import { AddSupplierComponent } from './component/supplier/add-supplier/add-supplier.component';
import { UpdateStaffComponent } from './component/staff/update-staff/update-staff.component';
import { ChartStaffComponent } from './component/staff/chart-staff/chart-staff.component';
import { AddStaffComponent } from './component/staff/add-staff/add-staff.component';
import { ListStaffComponent } from './component/staff/list-staff/list-staff.component';
import { EquipmentChartComponent } from './component/equipment/equipment-chart/equipment-chart.component';
import { UpdateEquipmentComponent } from './component/equipment/update-equipment/update-equipment.component';
import { AddEquipmentComponent } from './component/equipment/add-equipment/add-equipment.component';
import { LogisticComponent } from './Logistic/logistic/logistic.component';
import { ListEquipmentComponent } from './component/equipment/list-equipment/list-equipment.component';
import { NavbarcomponentbackComponent } from './BackOffice/navbarcomponentback/navbarcomponentback.component';
import { CreateDGComponent } from './CROWN/create-dg/create-dg.component';
import { DeleteDGComponent } from './CROWN/delete-dg/delete-dg.component';
import { OneDGComponent } from './CROWN/one-dg/one-dg.component';
import { UpdateDGComponent } from './CROWN/update-dg/update-dg.component';
import { AllDGComponent } from './CROWN/all-dg/all-dg.component';
import { StatsDGComponent } from './CROWN/stats-dg/stats-dg.component';
import { DancersGroupsDashboardComponent } from './CROWN/dancers-groups-dashboard/dancers-groups-dashboard.component';
import { VenueIndexFrontComponent } from './venue-index-front/venue-index-front.component';
import { VenueAddAdminComponent } from './venue-add-admin/venue-add-admin.component';
import { VenueAdminAzizComponent } from './venue-admin-aziz/venue-admin-aziz.component';
import { VenueUpdateAdminComponent } from './venue-update-admin/venue-update-admin.component';
import { MapDisplayFrontAzizComponent } from './map-display-front-aziz/map-display-front-aziz.component';
import { EventComponent } from './event/event.component';
import { LiveComponent } from './live/live.component';
import { ResultsComponent } from './results/results.component';
import { PartdetailsComponent } from './partdetails/partdetails.component';
import { FormsModule } from '@angular/forms';
import { UpdateTransportComponent } from './component/transport/update-transport/update-transport.component';
import { ListVehiculeComponent} from './component/vehicule/list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './component/vehicule/add-vehicule/add-vehicule.component';
import { UpdateVehiculeComponent } from './component/vehicule/update-vehicule/update-vehicule.component';
import { AddTransportComponent } from './component/transport/add-transport/add-transport.component';
import { MlogisticComponent } from './Logistic/mlogistic/mlogistic.component';
import { AddEquipmentDialogComponent } from './component/transport/add-equipment-dialog/add-equipment-dialog.component';
import { ListTransportComponent } from './component/transport/listtransport/listtransport.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { TicketbookComponent } from './component/ticketbook/ticketbook.component';
import { TicketAddComponent } from './component/ticket-add/ticket-add.component';
import { TicketUpdateComponent } from './component/ticket-update/ticket-update.component';
import { GroupStatsComponent } from './CROWN/group-stats/group-stats.component';
import { IndexEventComponent } from './index-event/index-event.component';
const routes: Routes = [
  { path:"front",
  component:AlltemplatefrontComponent,
  children:[
    {
      path:"indexDanceBack",
      component:DancecategorieComponent

    },
    {path:"hi",component:IndexEventComponent},
    {
      path:"book-ticket/:id_event",
      component:TicketbookComponent
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
      path:"affichage",
      component:AffichageComponent
   
     },

  ]
  
 },    {path:"view", component:ViewSheduleComponent},

{ path:"admin",
    component:AlltemplatebackComponent,
    children:[
      {
        path:"aff-ticket",
        component:TicketComponent
      },
      {
        path:"book-ticket/:id_event",
        component:TicketbookComponent
      },
      {
        path:"add-ticket",
        component:TicketAddComponent
      },
      {
        path:"updateT/:id_ticket",
        component:TicketUpdateComponent
      }, 
      {
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
  },
      {
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
    },{
      path:"venueadmin",
      component:VenueAdminAzizComponent
    },{
      path:"venueAdd",
      component:VenueAddAdminComponent
    },{
      path:"mapTest",
      component:MapDisplayFrontAzizComponent
    },
    {
      path:"listequipment",
      component:ListEquipmentComponent
  
      
    }, 
    
    


    { path:"logistic",
    component:LogisticComponent}, 
    
    


    { path:"mlogistic",
    component:MlogisticComponent},
    
    
    {
      path:"addequipment",
      component:AddEquipmentComponent
  
      
    },
    {
      path:"updateEquipment/:id_equipment",
      component:UpdateEquipmentComponent
  
      
    },
    { path: "equipmentchart", 
    component:EquipmentChartComponent
  
  }
    ,
    
    {
      path:"liststaff",
      component:ListStaffComponent
  
      
    },
    
    {
      path:"addstaff",
      component:AddStaffComponent
  
      
    },
    {

      path:"chartstaf",
      component:ChartStaffComponent
    }
    ,{
      path:"updateStaff/:id_staff",
      component:UpdateStaffComponent
  
      
    }
    ,
    
    {
      path:"addsupplier",
      component:AddSupplierComponent
  
      
    }
    ,
    
    {
      path:"listsupplier",
      component:ListSupplierComponent
  
      
    }
    ,
    {
      path:"updatesupplier/:id_supplier",
      component:UpdateSupplierComponent
  
      
    },
    {
      path:"updatevehicule/:id_vehicule",
      component:UpdateVehiculeComponent
  
      
    },
    
    
    {path:'createdg', component:CreateDGComponent},
      { path: 'dashboarddg', component: DancersGroupsDashboardComponent },
      {path:'statsdg', component:StatsDGComponent},
      {path:'deletedg', component:DeleteDGComponent},
      {path:'onedg', component:OneDGComponent},
      {path:'updatedg', component:UpdateDGComponent},
      {path:'alldg', component:AllDGComponent},
      {path:'', component:NavbarcomponentbackComponent},
      {path:'banuser' , component:BanUserComponent},
   
    {
  
      path:"listvehicule",
      component:ListVehiculeComponent
    },
    {
  
      path:"addvehicule",
      component:AddVehiculeComponent
    }
  
    
  
  
, {path:"listtransport",
  component:ListTransportComponent
} ,
{ path: 'addequipmentss/:id_transport', component: AddEquipmentDialogComponent },

    {
  
      path:"addtransport",
      component:AddTransportComponent
    }
    ,
    {
  
      path:"updatetransport/:id_transport",
      component:UpdateTransportComponent
    }
  
  ]}
,













































{path:"statss", component:GroupStatsComponent },
  {
    path:"forbiden",
    component:ForbiddenComponent
  },
 { path:"",
  component:AlltemplatefrontComponent,
  children:[


  ]
  
 },
 { path:"front", 
 component:AlltemplatefrontComponent,
 children:[
  {path:"venueindex" , component:VenueIndexFrontComponent },
  {
    path:"map",
    component:MapDisplayFrontAzizComponent
  },
  {
    path:"vote",
    component:CastvoteComponent
  },
  {
    path:"details",
    component:PartdetailsComponent
  },
  {
    path:"results",
    component:ResultsComponent
  }
  
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
    component: UserComponent 
   },
   {
    path:"book-ticket/:id_event",
    component:TicketbookComponent
  },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  {path: 'profile' , component:ProfileComponent},
 
 
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
      path:"adminnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
      component:AlltemplatebackComponent,
      children:[
      {path:"aff-ticket",
        component:TicketComponent
      },
     
      {
        path:"add-ticket",
        component:TicketAddComponent
      },
      {
        path:"updateT/:id_ticket",
        component:TicketUpdateComponent
      },
     

        { path: 'addequipmentss/:id_transport', component: AddEquipmentDialogComponent },
 
        {
      
          path:"addtransport",
          component:AddTransportComponent
        }
        ,
        {
      
          path:"updatetransport/:id_transport",
          component:UpdateTransportComponent
        }
  
,

           {path:"listtransport", component:ListTransportComponent } ,
        { path:"mlogistic",
        component:MlogisticComponent},
        {
    
          path:"addvehicule",
          component:AddVehiculeComponent
        },
          {
    
          path:"listvehicule",
          component:ListVehiculeComponent
        },{
        path:"addVote",
        component:AddVoteComponent
      },
      
      {
        path:"indexeventback",
        component:EventComponent
      },{
  
        path:"addEventBack",
        component:EventaddComponent
      }
      ,{
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
      },{
        path:"venueadmin",
        component:VenueAdminAzizComponent
      },{
        path:"venueAdd",
        component:VenueAddAdminComponent
      },
      
      
      {
        path:"listequipment",
        component:ListEquipmentComponent

      },
      {
        path:"stats",
        component:StatsComponent 
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
    path:"add/:eventId",
    component:AddParticipationComponent
  },{
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
  }, 
      
  { path:"logistic",
  component:LogisticComponent},
  
  
  {
    path:"addequipment",
    component:AddEquipmentComponent

    
  },
  {
    path:"updateEquipment/:id_equipment",
    component:UpdateEquipmentComponent

    
  },
  { path: "equipmentchart", 
  component:EquipmentChartComponent

}
  ,
  
  {
    path:"liststaff",
    component:ListStaffComponent

    
  },
  
  {
    path:"addstaff",
    component:AddStaffComponent

    
  },
  {

    path:"chartstaf",
    component:ChartStaffComponent
  }
  ,{
    path:"updateStaff/:id_staff",
    component:UpdateStaffComponent

    
  }
  ,
  
  {
    path:"addsupplier",
    component:AddSupplierComponent

    
  }
  ,
  
  {
    path:"listsupplier",
    component:ListSupplierComponent

    
  }
  ,
  {
    path:"updatesupplier/:id_supplier",
    component:UpdateSupplierComponent

    
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
        
        {path: "updateVote/:id",
      component: UpdatevoteComponent},
      {path: "vote",
    component: CastvoteComponent},
    {
      path:"welcome",
      component: AlltemplatefrontComponent,
      children:[{
        path:"all",
        component:HomecomponentfrontComponent
      },{
        path:"index1",
        component:EventComponent
      },{
        path:"newDance",
        component:AddNewDanceCategorieFrontComponent
      },{
        path:"view1",
        component:ViewSheduleComponent
      }
    
    ]
    },{
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
    },
    {
      path:"galaxydance",
      component:AlltemplatefrontComponent,
      children:[{
        path:"vote",
        component:CastvoteComponent
      },
      {
        path:"details",
        component:PartdetailsComponent
      },
      {
        path:"results",
        component:ResultsComponent
      }
  ]
    },
  
    


{
  path: 'venues/update/:id_venue',
  component: VenueUpdateAdminComponent
},
{path: "live",
component: LiveComponent
}
      , 
      
      


      { path:"logistic",
      component:LogisticComponent}, 
      
      


     
      
      
      {
        path:"addequipment",
        component:AddEquipmentComponent
    
        
      },
      {
        path:"updateEquipment/:id_equipment",
        component:UpdateEquipmentComponent
    
        
      },
      { path: "equipmentchart", 
      component:EquipmentChartComponent
    
    }
      ,
      
      {
        path:"liststaff",
        component:ListStaffComponent
    
        
      },
      
      {
        path:"addstaff",
        component:AddStaffComponent
    
        
      },
      {

        path:"chartstaf",
        component:ChartStaffComponent
      }
      ,{
        path:"updateStaff/:id_staff",
        component:UpdateStaffComponent
    
        
      }
      ,
      
      {
        path:"addsupplier",
        component:AddSupplierComponent
    
        
      }
      ,
      
      {
        path:"listsupplier",
        component:ListSupplierComponent
    
        
      }
      ,
      {
        path:"updatesupplier/:id_supplier",
        component:UpdateSupplierComponent
    
        
      },
      {
        path:"updatevehicule/:id_vehicule",
        component:UpdateVehiculeComponent
    
        
      }
      
      
  
      
    
      
    
    
  

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  , FormsModule
  ],
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


