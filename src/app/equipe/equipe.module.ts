import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';
import { EquipeService } from '../Core/services/equipe.service';
import { EquipeRoutingModule } from './equipe-routing.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';



@NgModule({
  declarations: [
    ListeEquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent
  ],
  providers:[EquipeService],

  imports: [
    CommonModule,
    EquipeRoutingModule, 
     FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipeModule { }
