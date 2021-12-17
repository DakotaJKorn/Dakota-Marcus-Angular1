import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})

export class CryptoComponent implements OnInit {
  
  cryptoList: any;
  cryptoArray = new Array();


  constructor(private apiService: ApiService) {

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
    this.apiService.getCrypto().subscribe((data)=>{
      this.cryptoList = data;
      console.log(data);
      //this.cryptoArray = this.cryptoList.results;
    });

  }

}


