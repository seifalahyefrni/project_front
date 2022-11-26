import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListedepComponent } from './listedep/listedep.component';

const routes: Routes = [  {path:'',component: ListedepComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
