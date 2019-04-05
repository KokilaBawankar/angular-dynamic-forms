import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";

@Component({
  selector: "app-button",
  template: `
    <div class="form-group" 
         [formGroup]="group"
         [ngClass]="field.classes"
         [ngStyle]="field.styles">
      <button [type]="field.buttonType"
              [ngClass]="field.label.classes"
              [ngStyle]="field.label.styles">{{field.label.text}}</button>
    </div>
  `,
  styles: []
})
export class ButtonComponent {
  field: FieldConfig;
  group: FormGroup;
}
