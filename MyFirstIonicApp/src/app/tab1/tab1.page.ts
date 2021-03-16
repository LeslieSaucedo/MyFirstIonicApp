import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  welcomeMessage: string;
  url: string;
  myApiResponseData: any;

  ngOnInit()
  {
    this.welcomeMessage = "Bienvenido a mi app";
    this.url = "http://swapi.dev/api/people/";
  }

  buttonClicked()
  {
     fetch(this.url)
    .then(response => response.json())
    .then((data) =>{

      this.myApiResponseData = data;

    })
  }



}
