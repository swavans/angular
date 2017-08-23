import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  year  = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  day = new Date().getDate();
  hour = new Date().getHours();
  minutes = new Date().getMinutes();
  seconds = new Date().getSeconds();
  constructor() { }

  ngOnInit() {
  }

}
