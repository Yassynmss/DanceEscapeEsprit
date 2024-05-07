
import { isDevMode } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlltemplatebackComponent } from './BackOffice/alltemplateback/alltemplateback.component';
import { FooterbackComponent } from './BackOffice/footerback/footerback.component';
import { NavbarbackComponent } from './BackOffice/navbarback/navbarback.component';
import { SidebarbackComponent } from './BackOffice/sidebarback/sidebarback.component';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';
import { FooterfrontComponent } from './FrontOffice/footerfront/footerfront.component';
import { HeaderfrontComponent } from './FrontOffice/headerfront/headerfront.component';
import { HomecomponentfrontComponent } from './FrontOffice/homecomponentfront/homecomponentfront.component';
import { NavbarcomponentfrontComponent } from './FrontOffice/navbarcomponentfront/navbarcomponentfront.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { MfaComponent } from './components/authenticate/mfa/mfa.component';
import { OtherMfaComponent } from './components/authenticate/other-mfa/other-mfa.component';
import { DisplayQrComponent } from './components/register/display-qr/display-qr.component';
import { ResetPasswordComponent } from './components/authenticate/reset-password/reset-password.component';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { HomeComponent } from './components/board/home/home.component';
import { MatDialogModuleComponent } from './mat-dialog-module/mat-dialog-module.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BanUserComponent } from './components/ban-user/ban-user.component';
import { AllFeedbackComponent } from './component/all-feedback/all-feedback.component';
import { PostFeedbackComponent } from './component/post-feedback/post-feedback.component';
import { UpdateFeedbackComponent } from './component/update-feedback/update-feedback.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { from } from 'rxjs';
import { AffichageComponent } from './component/affichage/affichage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BackofficeLayoutComponent } from './BackOffice/backoffice-layout/backoffice-layout.component';
import { AddParticipationComponent } from './add-participation/add-participation.component';
import { EditParticipationComponent } from './edit-participation/edit-participation.component';
import { VoteComponent } from './vote/vote.component';
import { AddVoteComponent } from './add-vote/add-vote.component';
import { FetchpartComponent } from './fetchpart/fetchpart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatevoteComponent } from './updatevote/updatevote.component';
import { CastvoteComponent } from './castvote/castvote.component';

import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; // Import MatSortModule
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
 import { EventparticipationsComponent } from './eventparticipations/eventparticipations.component';
 import { MatPaginatorModule } from '@angular/material/paginator';
import { EventComponent } from './event/event.component';
import { EventaddComponent } from './eventadd/eventadd.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { DancecategorieComponent } from './dancecategorie/dancecategorie.component';
import { DanceaddComponent } from './danceadd/danceadd.component';
import { DanceupdateComponent } from './danceupdate/danceupdate.component';
import { DancesearcheComponent } from './dancesearche/dancesearche.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultDialogEventComponent } from './search-result-dialog-event/search-result-dialog-event.component';
import { IndexEventComponent } from './index-event/index-event.component';
import { IndexDanceCategoriesComponent } from './index-dance-categories/index-dance-categories.component';
import { AddNewDanceCategorieFrontComponent } from './add-new-dance-categorie-front/add-new-dance-categorie-front.component';
import { FrontSearchBarComponent } from './front-search-bar/front-search-bar.component';
import { ViewSheduleComponent } from './view-shedule/view-shedule.component';
import { DisplayTimeEventComponent } from './display-time-event/display-time-event.component';
import { DisplayTimeEventPopUpComponent } from './display-time-event-pop-up/display-time-event-pop-up.component';
import { AdminStartPageAzizComponent } from './admin-start-page-aziz/admin-start-page-aziz.component';
import { NavbarcomponentbackComponent } from './BackOffice/navbarcomponentback/navbarcomponentback.component';
import { CreateDGComponent } from './CROWN/create-dg/create-dg.component';
import { UpdateDGComponent } from './CROWN/update-dg/update-dg.component';
import { DeleteDGComponent } from './CROWN/delete-dg/delete-dg.component';
import { AllDGComponent } from './CROWN/all-dg/all-dg.component';
import { OneDGComponent } from './CROWN/one-dg/one-dg.component';
import { StatsDGComponent } from './CROWN/stats-dg/stats-dg.component';
import { TranslatorComponent } from './CROWN/translator/translator.component';
import { DancersGroupsDashboardComponent } from './CROWN/dancers-groups-dashboard/dancers-groups-dashboard.component';
import { AppComponentComponent } from './CROWN/app-component/app-component.component';
import { UpdateUserComponent } from './CROWN/update-user/update-user.component';
import { VenueAddAdminComponent } from './venue-add-admin/venue-add-admin.component';
import { VenueAdminAzizComponent } from './venue-admin-aziz/venue-admin-aziz.component';
import { VenueIndexByIdComponent } from './venue-index-by-id/venue-index-by-id.component';
import { VenueIndexFrontComponent } from './venue-index-front/venue-index-front.component';
import { VenueUpdateAdminComponent } from './venue-update-admin/venue-update-admin.component';
import { MapDisplayFrontAzizComponent } from './map-display-front-aziz/map-display-front-aziz.component';
import { MatStepperModule } from '@angular/material/stepper';
import { LiveComponent } from './live/live.component';
import { PartdetailsComponent } from './partdetails/partdetails.component';
import { ResultsComponent } from './results/results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddEquipmentComponent } from './component/equipment/add-equipment/add-equipment.component';
import { UpdateEquipmentComponent } from './component/equipment/update-equipment/update-equipment.component';
import { ListEquipmentComponent } from './component/equipment/list-equipment/list-equipment.component';
import { ListStaffComponent } from './component/staff/list-staff/list-staff.component';
import { AddStaffComponent } from './component/staff/add-staff/add-staff.component';
import { AddSupplierComponent } from './component/supplier/add-supplier/add-supplier.component';
import { ListSupplierComponent } from './component/supplier/list-supplier/list-supplier.component';
import { UpdateSupplierComponent } from './component/supplier/update-supplier/update-supplier.component';
import { FormsModule } from '@angular/forms';
import { UpdateStaffComponent } from './component/staff/update-staff/update-staff.component';
import { EquipmentChartComponent } from './component/equipment/equipment-chart/equipment-chart.component';
import { ChartStaffComponent } from './component/staff/chart-staff/chart-staff.component';
import { LogisticComponent } from './Logistic/logistic/logistic.component';
import { AddTransportComponent } from './component/transport/add-transport/add-transport.component';
import { AddVehiculeComponent } from './component/vehicule/add-vehicule/add-vehicule.component';
import { ListVehiculeComponent } from './component/vehicule/list-vehicule/list-vehicule.component';
import { UpdateVehiculeComponent } from './component/vehicule/update-vehicule/update-vehicule.component';
import { UpdateTransportComponent } from './component/transport/update-transport/update-transport.component';
import { MlogisticComponent } from './Logistic/mlogistic/mlogistic.component';
import { AddEquipmentDialogComponent } from './component/transport/add-equipment-dialog/add-equipment-dialog.component';
import { ListTransportComponent } from './component/transport/listtransport/listtransport.component';
import { TicketAddComponent } from './component/ticket-add/ticket-add.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { TicketUpdateComponent } from './component/ticket-update/ticket-update.component';
import { TicketbookComponent } from './component/ticketbook/ticketbook.component';
import { GroupStatsComponent } from './CROWN/group-stats/group-stats.component';
import { FooterfrontEVAComponent } from './FrontOfficeEVALUATOR/footerfront-eva/footerfront-eva.component';
import { AlltemplatefrontEVAComponent } from './FrontOfficeEVALUATOR/alltemplatefront-eva/alltemplatefront-eva.component';
import { HeaderfrontEVAComponent } from './FrontOfficeEVALUATOR/headerfront-eva/headerfront-eva.component';
import { HomecomponentevaComponent } from './FrontOfficeEVALUATOR/homecomponenteva/homecomponenteva.component';
import { NavbarEVAComponent } from './FrontOfficeEVALUATOR/navbar-eva/navbar-eva.component';
import { NgChartsConfiguration } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    AlltemplatebackComponent,
    FooterbackComponent,
    NavbarbackComponent,
    SidebarbackComponent,
    AlltemplatefrontComponent,
    FooterfrontComponent,
    HeaderfrontComponent,
    HomecomponentfrontComponent,
    NavbarcomponentfrontComponent,
    RegisterComponent,
    AuthenticateComponent,
    UserlistComponent,
    MfaComponent,
    OtherMfaComponent,
    DisplayQrComponent,
    ResetPasswordComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    MatDialogModuleComponent,
    ProfileComponent,
    BanUserComponent,
    AllFeedbackComponent,
    PostFeedbackComponent,
    UpdateFeedbackComponent,
    AffichageComponent,
    BackofficeLayoutComponent,
    AddParticipationComponent,
     AddParticipationComponent,
    EditParticipationComponent,
    VoteComponent,
    AddVoteComponent,
    FetchpartComponent,
    UpdatevoteComponent,
    CastvoteComponent,
    EventparticipationsComponent,
    EventComponent,
    EventaddComponent,
    EventupdateComponent,
    DancecategorieComponent,
    DanceaddComponent,
    DanceupdateComponent,
    DancesearcheComponent,
    SearchbarComponent,
    SearchResultDialogEventComponent,
    IndexEventComponent,
    IndexDanceCategoriesComponent,
    AddNewDanceCategorieFrontComponent,
    FrontSearchBarComponent,
    ViewSheduleComponent,
    DisplayTimeEventComponent,
    DisplayTimeEventPopUpComponent,
    AdminStartPageAzizComponent,
    AddEquipmentComponent,
    UpdateEquipmentComponent,
    ListEquipmentComponent,
    ListStaffComponent,
    AddStaffComponent,
    AddSupplierComponent,
    ListSupplierComponent,
    UpdateSupplierComponent,
         UpdateStaffComponent,
         EquipmentChartComponent,
         ChartStaffComponent,
         LogisticComponent,
         NavbarcomponentbackComponent,
         CreateDGComponent,
         UpdateDGComponent,
         DeleteDGComponent,
         AllDGComponent,
         OneDGComponent,
         StatsDGComponent,
         TranslatorComponent,
         DancersGroupsDashboardComponent,
         AppComponentComponent,
         UpdateUserComponent,
         VenueAddAdminComponent,
         VenueAdminAzizComponent,
         VenueIndexByIdComponent,
         VenueIndexFrontComponent,
         VenueUpdateAdminComponent,
         ViewSheduleComponent,
         MapDisplayFrontAzizComponent,
         EventparticipationsComponent,
         LiveComponent,
         PartdetailsComponent,
         ResultsComponent,
 AddVehiculeComponent,
 ListVehiculeComponent,
 UpdateVehiculeComponent,
 AddTransportComponent,
 UpdateTransportComponent,
 MlogisticComponent,
 AddEquipmentDialogComponent,
 ListTransportComponent,
 TicketAddComponent,
 TicketComponent,
 TicketUpdateComponent,
 TicketbookComponent,
 GroupStatsComponent,
 FooterfrontEVAComponent,
 AlltemplatefrontEVAComponent,
 HeaderfrontEVAComponent,
 HomecomponentevaComponent,
 NavbarEVAComponent

  ],
  imports: [
    MatStepperModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule ,
    MatIconModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
  
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgChartsModule
  ],
    

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
