import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../field.interface';

@Component({
  selector: 'app-date',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
    <label [for]="field.name">{{field.label}}</label>
      <input type="date" [id]="field.name" [formControlName]="field.name" [name]="field.name">
      <ng-container *ngFor="let validation of field.validations;">
        <div class="invalid-feedback" style="display: initial"
             *ngIf="group.get(field.name).touched && group.get(field.name).hasError(validation.name)">{{validation.message}}</div>
      </ng-container>
    </div>
  `,
  styles: []
})
export class DateComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.group.get(this.field.name).patchValue( this.field.value ? this.field.value : '');
  }
}
