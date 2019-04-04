import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-checkbox",
  template: `
<div class="demo-full-width margin-top" [formGroup]="group" >
  <label>{{field.label}}</label>
  <div *ngFor="let item of field.options">
    <input type="checkbox" [id]="item.label"
           [formControlName]="field.name" 
           [name]="field.name" 
           [value]="item.label"
           [checked]="item.checked"
           (change)="onChange($event, item.label)">{{item.label}}
  </div>
</div>
`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
  onChange(event, item){
    console.log(item)
  }
}
