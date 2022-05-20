import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oink-button',
  templateUrl: './oink-button.component.html',
  styleUrls: ['./oink-button.component.scss'],
})
export class OinkButtonComponent implements OnInit {
	@Input() expand: String;
	@Input() buttonText: String;

  constructor() { }

  ngOnInit() {
	}

}
