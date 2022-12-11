import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/Core/services/equipe.service';
import { Equipe } from 'src/app/Core/Models/equipe';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  myId=0;
myEquipe:any;
updateUserForm= this.fb.group({
  idEquipe:[''],
  nomEquipe:[''],
  detailEquipe:[''],
  niveau:[''],
  etudiants:['']

})

  constructor(private actR: ActivatedRoute, private R:Router,private Equipes: EquipeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.actR.paramMap.subscribe(data=>this.myId = Number(data.get('param')));
    console.log(this.myId);

    
    this.Equipes.getEquipeById(this.myId).subscribe(data=> {
      this.myEquipe=data
      this.updateUserForm.setValue({idEquipe: this.myEquipe.idEquipe ,nomEquipe: this.myEquipe.nomEquipe, detailEquipe: this.myEquipe.detailEquipe ,
        niveau:this.myEquipe.niveau,etudiants:this.myEquipe.etudiants  })
  })
  }
  update(){
    this.updateUserForm
    this.Equipes.updateEquipe(this.updateUserForm.value).subscribe(()=>
    this.R.navigate(['equipe'])
    )
  }

}
