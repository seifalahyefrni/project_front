import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEquipeComponent } from './equipe/liste-equipe/liste-equipe.component';
const routes: Routes = [

  {path: 'Etudiants',
  loadChildren:()=>import('./etudiant/etudiant.module').then(x => x.EtudiantModule)},
  {path: 'Departements',
  loadChildren:()=>import('./departement/departement.module').then(x => x.DepartementModule)},
  {path :'Classe',
  loadChildren:()=>import('./classe/classe.module').then(x=>x.ClasseModule)},
  {path :'equipe',  
  loadChildren:()=>import('./equipe/equipe.module').then(x=>x.EquipeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
