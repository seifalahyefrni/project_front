import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators  } from '@angular/forms';
import { Departement } from 'src/app/Core/Models/Deaprtement';
import { DepartementService } from 'src/app/Core/services/departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  reactiveForm = this.fb.group({
    nomdepar:['', [Validators.required, Validators.minLength(3)]],
    });

  constructor(private fb:FormBuilder , private dep:DepartementService) { }
  
  ngOnInit(): void {
  }
  Save(){
    console.log(this.reactiveForm);
    let depar = this.reactiveForm.getRawValue();
    //this.dep.addDepartement(depar);
    console.log("departement = ", depar);

  }
  get nomdepar(){
    return this.reactiveForm.get('nomdepar');
  }
}
