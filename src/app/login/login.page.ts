import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  onlogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
        console.log(resp);

        let jwt = resp.body['token']
        this.authService.saveToken(jwt);
        this.router.navigateByUrl("/menu");
      }, err => {

      })
  }



  // isAdmin() {
  //   return this.authService.isAdmin();
  // }
  // isUser() {
  //   return this.authService.isUser();
  // }
  // isParte() {
  //   return this.authService.isParte();
  // }

}
