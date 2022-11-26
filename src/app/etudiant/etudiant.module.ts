import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { ListetudComponent } from './listetud/listetud.component';
import { EtudiantService } from '../Core/services/etudiant.service';


@NgModule({
  declarations: [
    ListetudComponent
  ],
  providers:[EtudiantService],

  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
