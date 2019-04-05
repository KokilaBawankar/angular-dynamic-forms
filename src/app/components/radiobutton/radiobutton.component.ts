import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../field.interface";
import {FormDataService} from "../../form-data.service";

@Component({
  selector: "app-radiobutton",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <label class="radio-label-padding" *ngIf="field.label">{{field.label}}:</label>
      <div *ngFor="let item of field.options">
        <input type="radio" [id]="item" [formControlName]="field.name" [value]="item" [(ngModel)]="formDataService.formData[field.name]">{{item}}
      </div>
    </div>
  `,
  styles: []
})
export class RadiobuttonComponent {
  field: FieldConfig;
  group: FormGroup;

  constructor(public formDataService: FormDataService) {}
}
