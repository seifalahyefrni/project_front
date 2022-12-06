import { NiveauClasse } from "../enum/niveau-classe";
import { Specialite } from "../enum/specialite";
import { Etudiant } from "./etudiant";
import { Matiere } from "./matiere";

export class Classe {
    idClasse!:number;
    numero!: number;
    NiveauClasse!:NiveauClasse
    Specialite!:Specialite
    matiéres!:[Matiere]
    Etudiants!:[Etudiant]

}
