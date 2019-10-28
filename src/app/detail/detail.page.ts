import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detail: import("/home/mbacke/Documents/IONIC/Transfert/src/app/model/Transaction").Transaction;

  constructor(private trans: TransactionService) { }

  ngOnInit() {
    console.log(this.trans.selecttrans)
    this.detail=this.trans.selecttrans;
  }
  

}
