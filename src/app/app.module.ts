
import { NgModule, isDevMode } from '@angular/core';
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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AffichageComponent } from './component/affichage/affichage.component';
import { NgxPaginationModule } from 'ngx-pagination';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    NgxPaginationModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
