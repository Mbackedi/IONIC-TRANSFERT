import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http: HttpClient) { }

  envoie(envoye) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/envoie";

    
    return this.http.post(host, envoye , { headers: headers });
  }

  retrait(retrai) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/retrait";
  
    return this.http.post(host, retrai, { headers: headers });
  }

}
