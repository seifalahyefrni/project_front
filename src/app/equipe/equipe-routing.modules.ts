import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';

const routes: Routes = [
    {path:'',component: ListeEquipeComponent},
    {path:'updateEquipe/:param',component:UpdateEquipeComponent},
    {path:'addEquipe',component:AddEquipeComponent}
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EquipeRoutingModule {}