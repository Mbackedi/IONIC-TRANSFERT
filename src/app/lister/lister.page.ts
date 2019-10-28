import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lister',
  templateUrl: './lister.page.html',
  styleUrls: ['./lister.page.scss'],
})
export class ListerPage implements OnInit {
  detailTs: any;
  public transaction: FormGroup
  trans: boolean;
  constructor(private listertra: TransactionService, private formGroup: FormBuilder, private router:Router) { }

  ngOnInit() {
  }

  detailTransaction = this.formGroup.group({
    debut: [''],
    fin: ['']
  })

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  transact() {
    this.trans = false;
  }
  commission() {
    this.trans = true;
  }



  detailist(data: any) {
    console.log(data);
    this.listertra.lister(this.detailTransaction.value)
      .subscribe(
        data => {
          console.log(data);
          this.detailTs = data

        }, err => {
          console.log(err);
        }
      )
  }

   goToView(detail: any) {
     this.listertra.selecttrans = detail;
    this.router.navigateByUrl('/detail');
  }

}
