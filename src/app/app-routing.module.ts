import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplatefrontComponent } from './FrontOffice/alltemplatefront/alltemplatefront.component';
import { AlltemplatebackComponent } from './BackOffice/alltemplateback/alltemplateback.component';
import { HomecomponentfrontComponent } from './FrontOffice/homecomponentfront/homecomponentfront.component';
import { FormsModule } from '@angular/forms';
import { ListEquipmentComponent } from './component/equipment/list-equipment/list-equipment.component';
import { AddEquipmentComponent } from './component/equipment/add-equipment/add-equipment.component';
import { UpdateEquipmentComponent } from './component/equipment/update-equipment/update-equipment.component';
import { ListStaffComponent } from './component/staff/list-staff/list-staff.component';
import { AddStaffComponent } from './component/staff/add-staff/add-staff.component';
import { AddSupplierComponent } from './component/supplier/add-supplier/add-supplier.component';
import { ListSupplierComponent } from './component/supplier/list-supplier/list-supplier.component';

import { UpdateSupplierComponent } from './component/supplier/update-supplier/update-supplier.component';
import { UpdateStaffComponent } from './component/staff/update-staff/update-staff.component';
import { EquipmentChartComponent } from './component/equipment/equipment-chart/equipment-chart.component';
import { ChartStaffComponent } from './component/staff/chart-staff/chart-staff.component';
import { LogisticComponent } from './Logistic/logistic/logistic.component';
import { ListTransportComponent } from './component/transport/list-transport/list-transport.component';
import { UpdateTransportComponent } from './component/transport/update-transport/update-transport.component';
import { ListVehiculeComponent} from './component/vehicule/list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './component/vehicule/add-vehicule/add-vehicule.component';
import { UpdateVehiculeComponent } from './component/vehicule/update-vehicule/update-vehicule.component';
import { AddTransportComponent } from './component/transport/add-transport/add-transport.component';
import { MlogisticComponent } from './Logistic/mlogistic/mlogistic.component';

const routes: Routes = [
  {
    path:"",
    component: AlltemplatefrontComponent,
    children:[{
      path:"",
      component:HomecomponentfrontComponent
    }]
  },
  {
    path:"admin",
    component:AlltemplatebackComponent ,
    children:[
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
 } 
 ,
      {
    
        path:"addtransport",
        component:AddTransportComponent
      }
      ,
      {
    
        path:"updatetransport/:id_transport",
        component:UpdateTransportComponent
      }


]},
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  , FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
