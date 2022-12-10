import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { ListedepComponent } from './listedep/listedep.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartementService } from '../Core/services/departement.service';



@NgModule({
  declarations: [
    ListedepComponent,
    AddDepartementComponent
  ],
  providers:[DepartementService],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DepartementModule { }
