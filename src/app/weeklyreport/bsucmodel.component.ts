import { Component, OnInit } from '@angular/core';
import {   NgForm } from '@angular/forms';
import { Card } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';


@Component({
    selector: 'app-bsucmodel',
    templateUrl: './bsucmodel.component.html'
})
export class BsucmodelComponent implements OnInit {
  card:any ={};
  
  constructor(
              private dataService: DataService) { }


  ngOnInit() {

  }

  submit() {

    this.dataService.getWeeklyReport()
   .subscribe(  (card: Card) => {
     console.log("message recieved by subscriber");
     this.card=card;
     console.log(card);
   });
  }
}
