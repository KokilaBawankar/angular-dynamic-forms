import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Ref. No.:',
      inputType: 'text',
      name: 'refNo',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Ref. No. Required'
        }
      ],
      styles: {
        'width': '200px',
        'height': '30px',
        'text-align': 'center',
      }
    },
    {
      type: 'heading',
      label: 'ADSP Assesment Form: AIP III Marketing Fund',
      styles: {
        'font-size': '30px',
        'font-weight': '600',
        'text-align': 'center'
      }
    },
    {
      type: 'input',
      label: 'Airlines/Company:',
      inputType: 'text',
      name: 'company',
      value: 'China Airlines',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Airlines/Company Required'
        }
      ]
    },
    {
      type: 'input',
      label: 'Routing:',
      inputType: 'text',
      name: 'routing',
      value: 'TPE/KUL',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Routing Required'
        }
      ]
    },
    {
      type: 'input',
      label: 'Flight Number:',
      inputType: 'text',
      name: 'flightNo',
      value: 'CZ8453/8454',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Flight Number Required'
        }
      ]
    },
    {
      type: 'date',
      label: 'Date of Comencement:',
      name: 'dateOfComencement',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Date of Comencement Required'
        }
      ]
    },
    {
      type: 'checkbox',
      label: 'Category:',
      name: 'term',
      value: false,
      options: [
        {
          label: 'FOCA',
          checked: true
        },{
          label: 'LOCA',
          checked: false
        }
        ]
    },
    {
      type: 'checkbox',
      label: 'Service:',
      name: 'term',
      value: false,
      options: [
        {
          label: 'Schedule',
          checked: true
        },{
          label: 'Charter',
          checked: false
        },
        {
          label: 'Cargo',
          checked: false
        }
      ]
    },
    {
      type: 'button',
      label: 'Save',
      class: 'btn btn-primary'
    },
  ];

  submit(value: any) {}
}
