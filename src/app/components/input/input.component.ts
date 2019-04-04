import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../field.interface';

@Component({
  selector: 'app-input',
  template: `
    <div class="demo-full-width form-group" [formGroup]="group">
      <label for="">{{field.label}}</label>
      <input class="form-control"
             [id]='field.name'
             [formControlName]="field.name"
             [placeholder]="field.label"
             [type]="field.inputType"
             [value]="field.value ? field.value : ''"
             [ngStyle]="field.styles"
             [ngClass]="field.class">
      <ng-container *ngFor="let validation of field.validations;">
        <div *ngIf="group.get(field.name).touched && group.get(field.name).hasError(validation.name)"
             class="invalid-feedback" style="display: initial">{{validation.message}}</div>
      </ng-container>
    </div>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
