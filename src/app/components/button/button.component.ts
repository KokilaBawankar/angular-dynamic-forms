import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";

@Component({
  selector: "app-button",
  template: `
    <div class="form-group" [formGroup]="group">
      <button type="submit"
              [ngClass]="field.class"
              [ngStyle]="field.styles">{{field.value}}</button>
    </div>
  `,
  styles: []
})
export class ButtonComponent {
  field: FieldConfig;
  group: FormGroup;
}
