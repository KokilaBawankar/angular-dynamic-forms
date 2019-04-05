import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";
import {FormDataService} from "../../form-data.service";

@Component({
  selector: "app-radiobutton",
  template: `
    <div [formGroup]="group" xmlns="http://www.w3.org/1999/html">
      <label *ngIf="field.label">{{field.label}}:</label>
      <div class="form-check" *ngFor="let item of field.options">
        <input class="form-check-input" 
               type="radio"
               [id]="item"
               [formControlName]="field.name"
               [value]="item"
               [(ngModel)]="formDataService.formData[field.name]">
        <label class="form-check-label">{{item}}</label>
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
