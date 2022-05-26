import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oink-button',
  templateUrl: 'oink-button.component.html',
  styleUrls: ['oink-button.component.scss'],
})
export class OinkButtonComponent implements OnInit {
  @Input() expand: String;
  @Input() routerLink: String;

  constructor() { }

  ngOnInit() {
  }
}
