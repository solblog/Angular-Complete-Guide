import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  displayedParagraph = false;
  logClicks = [];
  logStatus: string = 'lowerThanFive';

  constructor() {

  }

  ngOnInit() {
  }

  onDisplay() {
    this.logClicks.push(Date.now());
    // this.logClicks.push(this.logClicks.length + 1);
  }

}
