import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title:any='';

  constructor() { }

  ngOnInit(): void {
  }

}
