import {Component} from '@angular/core';
import {FieldConfig} from '../../field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-heading',
  template: `
    <div [ngStyle]="field.label.styles" 
         [ngClass]="field.label.classes">{{field.label.text}}</div>
  `,
  styles: ['']
})
export class HeadingComponent {
  field: FieldConfig;
  group: FormGroup;
}
