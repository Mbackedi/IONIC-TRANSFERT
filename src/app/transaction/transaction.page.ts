import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  public envoie: FormGroup;
  public retrait: FormGroup;
  public butonClicked: boolean = true;
  tarif: Object;

  //masquer l' envoi
  public onButtonClick() {
    this.butonClicked = true;
  }
  //masquer le retrait
  public offButtonClick() {
    this.butonClicked = false;
  }

  constructor(private transaction: TransactionService, private formBuilder: FormBuilder,
    public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Envoie',
      subHeader: 'KIMORA TRANSFERT',
      message: 'Envoie effectué avec succès.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentRetrait() {
    const alert = await this.alertController.create({
      header: 'Retrait',
      subHeader: 'SUNU TRANSFERT',
      message: 'Retrait effectué avec succès.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Envoie',
      subHeader: 'KIMORA TRANSFERT',
      message: 'Envoie non effectué',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentRtraitError() {
    const alert = await this.alertController.create({
      header: 'Retrait',
      subHeader: 'AND TRANSFERT',
      message: 'Code invalide ou déjà retiré',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.envoie = this.formBuilder.group({
      nomExp: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]],
      prenomExp: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]],
      telephonExp: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]],
      numeropieceEXp: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(9), Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]],
      numeropieceBen: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(9), Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]],
      montant: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(9), Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]],
      nomBen: ['', [Validators.required, Validators.minLength(9), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]],
      prenomBen: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]],
      telephonBen: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]],
      code: ['', Validators.required]
    })

    this.retrait = this.formBuilder.group({
      typepieceBen: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(9), Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]],
      numeropieceBen: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(9), Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]],
      code: ['', Validators.required]

    })
  }



  erreurmes = {
    'nomExp': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'pattern', message: 'Veuilez saisir des lettres' }

    ],

    'prenomExp': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'pattern', message: 'Veuilez saisir des lettres' }

    ],

    'telephonExp': [
      { type: 'required', message: 'Le téléphone est obligatoire' },
      { type: 'pattern', message: 'Veuilez renseigner un numéro correct' }
    ],

    'numeropieceEXp': [
      { type: 'required', message: 'Le numéro piece est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir au minimum 12 chiffres' },

    ],

    'numeropieceBen': [
      { type: 'required', message: 'Le numéro piece est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir au minimum 12 chiffres' },

    ],

    'montant': [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],

    'nomBen': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir des lettres' }
    ],

    'prenomBen': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir des lettres' }
    ],

    'telephonBen': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'minlength', message: 'Veuilez renseigner un numéro correct' }
    ],

  }

  onsubmit() {
    console.log(this.envoie.value);
    this.transaction.envoie(this.envoie.value)

      .subscribe(
        data => {
          this.presentAlert();

        }, err => {
          console.log(err);
          this.presentAlertError();
        }
      )
  }

  onsubmite() {
    console.log(this.retrait.value);
    this.transaction.retrait(this.retrait.value)
      .subscribe(
        data => {
          this.presentRetrait();
          
        }, err => {
          console.log(err);
          this.presentRtraitError();
        }
      )
  }

  frais(data: any) {
    console.log(data);
    this.transaction.frais(data)
      .subscribe(
        res => {
          this.tarif = res;
          console.log(res);
          console.log(this.tarif);
        }

      )
  }


}
