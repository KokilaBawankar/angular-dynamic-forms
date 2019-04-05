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
      placeholder: 'Ref. No.:',
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
      type: 'radiobutton',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female'],
      value: 'Male'
    },
    {
      type: 'heading',
      label: 'Airline Marketing/Forms : ADSP01',
      styles: {
        'font-size': '12px',
        'font-weight': '500'
      }
    },
    {
      type: 'heading',
      label: 'ADSP Assesment Form: AIP III Marketing Fund',
      styles: {
        'font-size': '30px',
        'font-weight': '600',
        'text-align': 'center',
        'text-decoration': 'underline',
        'text-transform': 'uppercase',
      }
    },
    {
      type: 'input',
      label: 'Airlines/Company:',
      placeholder: 'Airlines/Company:',
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
      placeholder: 'Routing:',
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
      placeholder: 'Flight Number:',
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
      name: 'category',
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
      name: 'service',
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
      type: 'heading',
      label: 'Part B: Claim details',
      styles: {
        'font-size': '20px',
        'font-weight': '600',
        'text-decoration': 'underline',
        'text-transform': 'uppercase',
      }
    },
    {
      type: 'heading',
      label: 'Activity: News Paper Advertisement and KULMATTA Fair',
      styles: {
        'font-size': '15px',
        'font-weight': '600',
        'text-decoration': 'underline'
      }
    },
    {
      type: 'heading',
      label: 'Duration: Jully until Sempetember 2018',
      styles: {
        'font-size': '15px',
        'font-weight': '600',
      }
    },
    {
      type: 'checkbox',
      label: 'Pay To:',
      name: 'payto',
      value: false,
      options: [
        {
          label: 'Airline',
          checked: true
        },{
          label: 'Appointed Vendor',
          checked: false
        }
      ]
    },
    {
      type: 'heading',
      label: 'Amount: RM26,500.00',
      styles: {
        'font-size': '15px',
        'font-weight': '600',
      }
    },
    {
      type: 'heading',
      label: 'Available Balance: RM23,500.00',
      styles: {
        'font-size': '15px',
        'font-weight': '600',
      }
    },
    {
      type: 'heading',
      label: 'Part C: Document Checklist',
      styles: {
        'font-size': '20px',
        'font-weight': '600',
        'text-decoration': 'underline',
        'text-transform': 'uppercase',
      }
    },
    {
      type: 'checkbox',
      label: '',
      name: 'documentChecklist',
      value: false,
      options: [
        {
          label: 'Proof of Undertaken Activities',
          checked: false
        },{
          label: 'Invoice',
          checked: false
        },
        {
          label: 'Receive Payment Proof',
          checked: false
        },
        {
          label: 'Letter of Appointment from Airlines',
          checked: false
        },
        {
          label: 'Account Details',
          checked: false
        }
      ],
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Date of Comencement Required'
        }
      ]
    },
    {
      type: 'button',
      value: 'Save',
      class: 'btn btn-primary'
    }
  ];

  submit(value: any) {
    console.log('Form Data', value);
  }
}
