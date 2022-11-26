import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListetudComponent } from './listetud/listetud.component';

const routes: Routes = [
  {path:'',component: ListetudComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
