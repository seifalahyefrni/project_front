import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';

const routes: Routes = [
  {path:'',component: ListeClasseComponent},
  {path:'updateClasse/:param',component:UpdateClasseComponent},
  {path:'addClasse',component:AddClasseComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
