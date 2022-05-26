import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oink-button',
  templateUrl: 'oink-button.component.html',
  styleUrls: ['oink-button.component.scss'],
})
export class OinkButtonComponent {
  @Input() expand: string;
  @Input() disabled: boolean;
  @Input() routerLink: string;

  public onClick(event: Event) {
    if (this.disabled) return event.stopPropagation();
  }
}
