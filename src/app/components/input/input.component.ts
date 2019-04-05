import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../field.interface';
import {FormDataService} from "../../form-data.service";

@Component({
  selector: 'app-input',
  template: `
    <div class="demo-full-width form-group" [formGroup]="group">
      <label [for]="field.name" *ngIf="field.label">{{field.label}}</label>
      <input class="form-control"
             [id]='field.name'
             [formControlName]="field.name"
             [placeholder]="field.placeholder"
             [type]="field.inputType"
             [value]="field.value ? field.value : ''"
             [ngStyle]="field.styles"
             [ngClass]="field.class"
             [(ngModel)]="formDataService.formData[field.name]">
      <ng-container *ngFor="let validation of field.validations;">
        <div *ngIf="group.get(field.name).touched && group.get(field.name).hasError(validation.name)"
             class="invalid-feedback" style="display: initial">{{validation.message}}</div>
      </ng-container>
    </div>
  `,
  styles: []
})
export class InputComponent {
  field: FieldConfig;
  group: FormGroup;

  constructor(public formDataService: FormDataService) {}
}
