import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent implements OnInit, AfterViewInit {
  stickyView = {
    top: 10,
    bottom: 0
  };
  demoDocViewerMain: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.demoDocViewerMain = document.getElementById('sticky-div');

  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.

  }

}
