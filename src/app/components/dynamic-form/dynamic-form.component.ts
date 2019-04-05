import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {FieldConfig} from "../../field.interface";
import {FormDataService} from "../../form-data.service";

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  template: `
    <form [formGroup]="form" (submit)="onSubmit($event)" (reset)="onReset($event)">
      <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
      </ng-container>
    </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.form = this.createControl();

    this.formDataService.formData = this.form.value;
    for (let i = 0 ; i < this.fields.length ; i ++ ) {
      if(this.fields[i].type === 'checkbox') {
        this.formDataService.formData[this.fields[i].name] = [];
        for (let j = 0 ; j < this.fields[i].options.length ; j++ ) {
          if(this.fields[i].options[j].checked) {
            this.formDataService.formData[this.fields[i].name].push(this.fields[i].options[j].label);
          }
        }
      }
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.formDataService.formData);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  onReset(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.form.reset();
    this.formDataService.formData = this.form.value;
    for (let i = 0 ; i < this.fields.length ; i ++ ) {
      if(this.fields[i].type === 'checkbox') {
        this.formDataService.formData[this.fields[i].name] = [];
      }
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button' || field.type === 'heading') {
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }
}
