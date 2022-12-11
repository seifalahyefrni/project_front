import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClasseRoutingModule } from './classe-routing.module';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { ClasseService } from '../Core/services/classe.service';


@NgModule({
  declarations: [
    ListeClasseComponent,
    UpdateClasseComponent,
    AddClasseComponent
  ],
  providers:[ClasseService],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClasseModule { }
