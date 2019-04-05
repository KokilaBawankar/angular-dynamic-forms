import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";

@Component({
  selector: "app-select",
  template: `
    <div class="form-group" [formGroup]="group" [ngStyle]="field.styles" [ngClass]="field.classes">
      <label *ngIf="field.label" 
             [for]="field.name"
             [ngStyle]="field.label.styles"
             [ngClass]="field.label.classes">
        {{field.label.text}}
      </label>
      <select class="form-control"
              [formControlName]="field.name" 
              [id]="field.name"
              [name]="field.name">
        <option *ngFor="let item of field.options" 
                [value]="item">
          {{item}}
        </option>
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
