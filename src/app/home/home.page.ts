import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact={
    name:"KIMORA",
    email:"kimorazo@gmail.com",
    tel:"772026057",
    logo:"assets/images/ima5.jpg",
    location:"assets/images/son.jpeg"
  }

  constructor() {}

}
