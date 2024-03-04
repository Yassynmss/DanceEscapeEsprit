import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';
import { AlltemplatebackComponent } from './BackOffice/alltemplateback/alltemplateback.component';
import { HomecomponentfrontComponent } from './FrontOffice/homecomponentfront/homecomponentfront.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { RegisterComponent } from './components/register/register.component';
import { UserlistComponent } from './components/userlist/userlist.component';
const routes: Routes = [
  {
    path:"front",
    component: AlltemplatefrontComponent,
    children:[{
      path:"",
      component:HomecomponentfrontComponent
    }],
  },
  {
    path:"admin",
    component:AlltemplatebackComponent
  },
  { path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: 'list', component: UserlistComponent },
  { path: 'login', component: AuthenticateComponent },
  { path: 'register', component: RegisterComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
