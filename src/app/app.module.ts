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
import { HttpClientModule } from "@angular/common/http";
import { BackofficeLayoutComponent } from './BackOffice/backoffice-layout/backoffice-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddParticipationComponent } from './add-participation/add-participation.component';
import { EditParticipationComponent } from './edit-participation/edit-participation.component';
import { VoteComponent } from './vote/vote.component';
import { AddVoteComponent } from './add-vote/add-vote.component';
import { FetchpartComponent } from './fetchpart/fetchpart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatevoteComponent } from './updatevote/updatevote.component';

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
    BackofficeLayoutComponent,
    AddParticipationComponent,
    EditParticipationComponent,
    VoteComponent,
    AddVoteComponent,
    FetchpartComponent,
    UpdatevoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
