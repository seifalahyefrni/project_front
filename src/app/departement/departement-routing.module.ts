import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListedepComponent } from './listedep/listedep.component';

const routes: Routes = [  {path:'',component: ListedepComponent},
{path: 'addDepartement', component:AddDepartementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
