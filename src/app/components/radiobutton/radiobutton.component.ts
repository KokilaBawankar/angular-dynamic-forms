import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";
import {FormDataService} from "../../form-data.service";

@Component({
  selector: "app-radiobutton",
  template: `
    <div [formGroup]="group" [ngStyle]="field.styles" [ngClass]="field.classes">
      <label *ngIf="field.label"
             [ngStyle]="field.label.styles"
             [ngClass]="field.label.classes">
        {{field.label.text}}
      </label>
      <div class="form-check" *ngFor="let item of field.options">
        <input class="form-check-input" 
               type="radio"
               [id]="item.label"
               [formControlName]="field.name"
               [value]="item.label"
               [(ngModel)]="formDataService.formData[field.name]">
        <label class="form-check-label">{{item.label}}</label>
      </div>
    </div>
  `,
  styles: []
})
export class RadiobuttonComponent {
  field: FieldConfig;
  group: FormGroup;

  constructor(public formDataService: FormDataService) {
  }
}
