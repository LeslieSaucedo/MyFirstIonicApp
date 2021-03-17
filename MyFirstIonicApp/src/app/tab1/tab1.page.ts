import { Component } from '@angular/core';
import { Apimodels } from '../models/apimodels';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  welcomeMessage: string;
  url: string;
  myApiResponseData: Apimodels.ISWData;
  processing: boolean;

  ngOnInit()
  {
    this.welcomeMessage = "Bienvenido a mi app";
    this.url = "http://swapi.dev/api/people/";
    this.myApiResponseData = <Apimodels.ISWData>{}; // new Apimodels.ISWData
    this.processing = false;
  }

  buttonClicked()
  {
     fetch(this.url)
    .then(response => response.json())
    .then((data: Apimodels.ISWData) =>{
      // debugger;
      this.myApiResponseData = data;
    })
  }
}
