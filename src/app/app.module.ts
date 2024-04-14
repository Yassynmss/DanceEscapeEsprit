import { NgModule } from '@angular/core';
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
import {HttpClientModule} from "@angular/common/http";
import { EventComponent } from './event/event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventaddComponent } from './eventadd/eventadd.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { DancecategorieComponent } from './dancecategorie/dancecategorie.component';
import { DanceaddComponent } from './danceadd/danceadd.component';
import { DanceupdateComponent } from './danceupdate/danceupdate.component';
import { DancesearcheComponent } from './dancesearche/dancesearche.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultDialogEventComponent } from './search-result-dialog-event/search-result-dialog-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { IndexEventComponent } from './index-event/index-event.component';
import { IndexDanceCategoriesComponent } from './index-dance-categories/index-dance-categories.component';
import { AddNewDanceCategorieFrontComponent } from './add-new-dance-categorie-front/add-new-dance-categorie-front.component';
import { FrontSearchBarComponent } from './front-search-bar/front-search-bar.component';
import { ViewSheduleComponent } from './view-shedule/view-shedule.component';
import { DisplayTimeEventComponent } from './display-time-event/display-time-event.component';
import { DisplayTimeEventPopUpComponent } from './display-time-event-pop-up/display-time-event-pop-up.component';
import { AdminStartPageAzizComponent } from './admin-start-page-aziz/admin-start-page-aziz.component';

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
    AdminStartPageAzizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
