import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";

@Component({
  selector: "app-select",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <label *ngIf="field.label" [for]="field.name">{{field.label}}</label>
      <select [formControlName]="field.name" [id]="field.name">
        <option *ngFor="let item of field.options" [value]="item">{{item}}</option>
      </select>
    </div>
  `,
  styles: []
})
export class SelectComponent {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }
}
