import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/Core/services/classe.service';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css'],
  providers:[ClasseService]
})
export class AddClasseComponent implements OnInit {
  Reactiveform = this.fb.group({
    
  })

  constructor(private fb:FormBuilder,private classes:ClasseService) { }

  ngOnInit(): void {
  }

}
