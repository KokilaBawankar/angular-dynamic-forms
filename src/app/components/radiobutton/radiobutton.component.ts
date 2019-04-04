import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-radiobutton",
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<label class="radio-label-padding">{{field.label}}:</label>
<div *ngFor="let item of field.options">
  <input type="radio" [id]="item" [formControlName]="field.name" [value]="item">{{item}}
</div>
</div>
`,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
