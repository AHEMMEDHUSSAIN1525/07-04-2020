import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  places:{state:string,capital:string}[];
  constructor() { }

  ngOnInit(): void {
    this.places= [ 
      {state:'Andhra pradesh',capital:'Not yet decided'},
      {state:'Telangana',capital:'Hyderabad'},
      {state:'Sikkim',capital:'Gangtok'},
      {state:'Maharashtra',capital:'Mumbai'},
      {state:'Delhi',capital:'Delhi'},
      {state:'West Bengal',capital:'Kolkata'},
      {state:'Assam',capital:'Dispur'},
      {state:'Mizoram',capital:'Meghalaya'},
      {state:'Nepal',capital:'Katmandu'},
      {state:'Rajastan',capital:'Jaipur'}
    ]
  }

}
