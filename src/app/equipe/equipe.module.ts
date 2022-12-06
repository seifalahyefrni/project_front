import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';
import { EquipeService } from '../Core/services/equipe.service';
import { EquipeRoutingModule } from './equipe-routing.modules';



@NgModule({
  declarations: [
    ListeEquipeComponent
  ],
  providers:[EquipeService],

  imports: [
    CommonModule,
    EquipeRoutingModule
  ]
})
export class EquipeModule { }
