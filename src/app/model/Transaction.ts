export interface Transaction {

    montant: string;
    datedenvoie: Date;
    telephonExp:string;
    commissionetat: number;
    commissionparte: number;
    commissionsup: number;
    dateretrait: Date;
    dateEnvoie: Date;
    tarifs: { frais: number };
    message: string;
    // tslint:disable-next-line: ban-types
    beneficiaire: { prenomBen: String, nomBen: String };
    // tslint:disable-next-line: ban-types
    expediteur: { prenomExp: string, nomExp: String };
    user: { nom: string, prenom: string };
    caissier: { nom: string, prenom: string };
}