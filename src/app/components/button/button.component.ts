import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";

@Component({
  selector: "app-button",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <button type="submit" class="{{field.class}}">{{field.value}}</button>
    </div>
  `,
  styles: []
})
export class ButtonComponent {
  field: FieldConfig;
  group: FormGroup;
}
