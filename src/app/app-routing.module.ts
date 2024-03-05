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

import { UpdateSupplierComponent } from './component/supplier/modify-supplier/update-supplier.component';

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
    
        
      }, {
        path:"addequipment",
        component:AddEquipmentComponent
    
        
      },
      {
        path:"updateEquipment/:id_equipment'",
        component:UpdateEquipmentComponent
    
        
      }
      ,
      
      {
        path:"liststaff",
        component:ListStaffComponent
    
        
      },
      
      {
        path:"addstaff",
        component:AddStaffComponent
    
        
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
        path:"updatesupplier/:id_supplier'",
        component:UpdateSupplierComponent
    
        
      }
    ]

    
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  , FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
