import { Niveau } from "../enum/niveau";
import { detailEquipe } from "./detailEquipe";
import { Etudiant } from "./etudiant";

export class Equipe {
        
    idEquipe!: number;
    nomEquipe!: string;
    niveau!:Niveau;
    etudiants!:[Etudiant];
    detailEquipe!:detailEquipe;

}
