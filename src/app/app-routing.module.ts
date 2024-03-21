import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';
import { HomecomponentfrontComponent } from './FrontOffice/homecomponentfront/homecomponentfront.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { MfaComponent } from './components/authenticate/mfa/mfa.component';
const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
      
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
    component: MfaComponent,
  },
  {
    path:'front', component:AlltemplatefrontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
