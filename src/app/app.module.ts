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
import { MfaComponent } from './components/authenticate/mfa/mfa.component';
import { OtherMfaComponent } from './components/authenticate/other-mfa/other-mfa.component';
import { DisplayQrComponent } from './components/register/display-qr/display-qr.component';
import { ResetPasswordComponent } from './components/authenticate/reset-password/reset-password.component';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { HomeComponent } from './components/board/home/home.component';
import { MatDialogModuleComponent } from './mat-dialog-module/mat-dialog-module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatDialogModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
