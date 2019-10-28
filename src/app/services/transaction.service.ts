import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../model/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

selecttrans:Transaction;
  constructor(private http: HttpClient) { }

  envoie(envoye) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/envoie";


    return this.http.post(host, envoye, { headers: headers });
  }

  retrait(retrai) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/retrait";

    return this.http.post(host, retrai, { headers: headers });
  }

  frais(frai) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/frais/1";

    return this.http.post(host, frai, { headers: headers });
  }

  lister(list) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/periode/1";

    return this.http.post(host, list, { headers: headers });
  }

}
