import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '../../field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-heading',
  template: `
  <div [ngStyle]="field.styles">{{field.label}}</div>
  `,
  styles: ['']
})
export class HeadingComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
