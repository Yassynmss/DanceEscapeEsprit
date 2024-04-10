import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { ReactiveFormsModule } from '@angular/forms';

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
 
    



   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
