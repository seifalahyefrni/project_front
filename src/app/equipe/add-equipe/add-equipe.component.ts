import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Equipe } from 'src/app/Core/Models/equipe';
import { EquipeService } from 'src/app/Core/services/equipe.service';
import { Niveau } from 'src/app/Core/enum/niveau';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css'],
  providers:[EquipeService]
})
export class AddEquipeComponent implements OnInit {
  reactiveForm = this.fb.group({
    nomEquipe:['', [Validators.required, Validators.minLength(3)]],
    Niveau: ['',Validators.required],
    detailEquipe:['', [Validators.required, Validators.minLength(3)]],
    });

  constructor(private fb:FormBuilder,private Equipes:EquipeService) { }

  ngOnInit(): void {
  }
  Save(){
    console.log(this.reactiveForm);
    let Equipe = this.reactiveForm.getRawValue();
   // this.Equipes.addEquipe(Equipe);
    console.log("user = ", Equipe);

  }

  get nomEquipe(){
    return this.reactiveForm.get('nomEquipe');
  }
  get detailEquipe(){
    return this.reactiveForm.get('detailEquipe');
  }
}
