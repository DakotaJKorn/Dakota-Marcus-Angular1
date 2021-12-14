import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  
  cryptoArray = new Array();
  private dbPath = '/tutorials';


  constructor() {

    for(let i = 0; i < 10; i++)
    {
      this.cryptoArray.push({
        name: 'name' + i,
        symbol: 'symbol' + i,
        value: Math.random() * 10000
      });
    }


   }

  ngOnInit(): void {


  }

}


