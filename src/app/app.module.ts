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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { UserlistComponent } from './components/userlist/userlist.component';
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
    UserlistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
