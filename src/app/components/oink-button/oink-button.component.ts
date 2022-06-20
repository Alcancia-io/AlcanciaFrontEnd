import {
  EventEmitter,
  Component,
  OnInit,
  Input,
  Output,
  HostListener
} from '@angular/core';

@Component({
  selector: 'oink-button',
  templateUrl: 'oink-button.component.html',
  styleUrls: ['oink-button.component.scss'],
})
export class OinkButtonComponent {
  @Input() disabled: boolean;
  @Input() expand: string;
  @Input() routerLink: string;

  expandLower() {
    return this.expand.toLowerCase();
  }
}
