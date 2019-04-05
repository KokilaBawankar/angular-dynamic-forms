import {Component} from '@angular/core';
import {FieldConfig} from '../../field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-heading',
  template: `
    <div [ngStyle]="field.styles">{{field.label}}</div>
  `,
  styles: ['']
})
export class HeadingComponent {
  field: FieldConfig;
  group: FormGroup;
}
