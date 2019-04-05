import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";
import {FormDataService} from "../../form-data.service";

@Component({
  selector: "app-checkbox",
  template: `
    <div class="form-group" [formGroup]="group" [ngClass]="field.classes" [ngStyle]="field.styles">
      <label *ngIf="field.label"
             [ngClass]="field.label.classes"
             [ngStyle]="field.label.styles">{{field.label.text}}</label>
      <div class="form-check" *ngFor="let item of field.options">
        <input class="form-check-input"
               type="checkbox"
               [id]="item.label"
               [formControlName]="field.name"
               [name]="field.name"
               [value]="item.label"
               [checked]="item.checked"
               (change)="onChange($event, item.label)">
        <label class="form-check-label" 
               [ngClass]="item.classes" 
               [ngStyle]="item.styles">{{item.label}}</label>
      </div>
      <ng-container *ngIf="field.validations && field.validations[0].name === 'required'">
        <div *ngIf="group.get(field.name).touched && formDataService.checkBoxValidity(field.name)"
             class="invalid-feedback" style="display: initial">{{field.validations[0].message}}</div>
      </ng-container>
    </div>
  `,
  styles: []
})
export class CheckboxComponent {
  field: FieldConfig;
  group: FormGroup;

  constructor(public formDataService: FormDataService) {
  }

  onChange(event, item) {
    if (event.target.checked) {
      this.formDataService.formData[this.field.name].push(item);
    } else {
      this.formDataService.formData[this.field.name] = this.formDataService.formData[this.field.name]
        .filter(i => item != i);
    }
  }
}
