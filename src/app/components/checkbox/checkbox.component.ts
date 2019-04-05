import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";
import {FormDataService} from "../../form-data.service";

@Component({
  selector: "app-checkbox",
  template: `
    <div class="form-group" [formGroup]="group">
      <label *ngIf="field.label">{{field.label}}</label>
      <div class="form-check" *ngFor="let item of field.options">
        <input class="form-check-input"
               type="checkbox"
               [id]="item.label"
               [formControlName]="field.name"
               [name]="field.name"
               [value]="item.label"
               [checked]="item.checked"
               (change)="onChange($event, item.label)">
        <label class="form-check-label">{{item.label}}</label>
      </div>
    </div>
  `,
  styles: []
})
export class CheckboxComponent {
  field: FieldConfig;
  group: FormGroup;

  constructor(private formDataService: FormDataService) {
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
