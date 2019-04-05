import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../field.interface';
import {FormDataService} from "../../form-data.service";

@Component({
  selector: 'app-date',
  template: `
    <div class="form-group" [formGroup]="group">
      <label [for]="field.name" *ngIf="field.label">{{field.label}}</label>
      <input class="form-control"
             type="date" 
             [id]="field.name" 
             [formControlName]="field.name" 
             [name]="field.name" 
             [ngClass]="field.class"
             [ngStyle]="field.styles"
             [(ngModel)]="formDataService.formData[field.name]">
      
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

  constructor(public formDataService: FormDataService) {}

  ngOnInit() {
    this.group.get(this.field.name).patchValue(this.field.value ? this.field.value : '');
  }
}
