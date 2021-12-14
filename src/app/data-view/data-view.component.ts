import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
  styles: ['h1 { font-weight: bold; font-style: italic; }']
})
export class DataViewComponent implements OnInit {
  skillList: any = "";
  skillArray = new Array();

  classList: any = "";
  classArray = new Array();

  constructor(private apiService: ApiService) {
   }

ngOnInit() {
    this.skillList = this.apiService.getSkill().subscribe((data)=>{
      this.skillList = data;
      this.skillArray = this.skillList.results;
    });

    this.apiService.getClasses().subscribe((data)=>{

      let b = Object.values(data)[1];

      this.classList = data;
      this.classArray = this.classList.results;
      for(let i = 0; i < 7; i++)
      this.classArray.push({index: ' ', name:' ', url: ' '});

    });

  }

}
