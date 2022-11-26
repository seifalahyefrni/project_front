import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'Etudiants',
  loadChildren:()=>import('./etudiant/etudiant.module').then(x => x.EtudiantModule)},
  {path: 'Departements',
  loadChildren:()=>import('./departement/departement.module').then(x => x.DepartementModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
