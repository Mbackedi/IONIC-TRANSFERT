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

  retrait(retrait) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/retrait";
    const formData: FormData = new FormData();
    formData.append('code', retrait.code);
    return this.http.post(host, formData, { headers: headers });
  }

}
