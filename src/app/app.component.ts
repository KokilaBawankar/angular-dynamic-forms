import {Component, ViewChild} from '@angular/core';
import {Validators} from '@angular/forms';
import {FieldConfig} from './field.interface';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {FormDataService} from "./form-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(public formDataService: FormDataService) {
  }

  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: {
        text: 'Ref. No.:',
        styles: {},
        classes: ['text-primary']
      },
      placeholder: 'Ref. No.:',
      inputType: {
        type: 'text',
        styles: {},
        classes: []
      },
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
      }
    },
    {
      type: 'heading',
      label: {
        text: 'Airline Marketing/Forms : ADSP01',
        styles: {
          'font-size': '12px',
          'font-weight': '500'
        },
        classes: ['text-primary']
      }
    },
    {
      type: 'heading',
      label: {
        text: 'ADSP Assesment Form: AIP III Marketing Fund',
        styles: {
          'font-size': '30px',
          'font-weight': '600',
          'text-align': 'center',
          'text-decoration': 'underline',
          'text-transform': 'uppercase',
        },
        classes: ['text-info']
      }
    },
    {
      type: 'input',
      label: {
        text: 'Airlines/Company:',
        styles: {},
        classes: ['text-primary']
      },
      placeholder: 'Airlines/Company:',
      inputType: {
        type: 'text',
        styles: {},
        classes: []
      },
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
      label: {
        text: 'Routing:',
        styles: {},
        classes: ['text-primary']
      },
      placeholder: 'Routing:',
      inputType: {
        type: 'text',
        styles: {},
        classes: []
      },
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
      label: {
        text: 'Flight Number:',
        styles: {},
        classes: ['text-primary']
      },
      placeholder: 'Flight Number:',
      inputType: {
        type: 'text',
        styles: {},
        classes: []
      },
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
      label: {
        text: 'Date of Comencement:',
        styles: {},
        classes: ['text-primary']
      },
      inputType: {
        type: 'date',
        styles: {},
        classes: []
      },
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
      type: 'radiobutton',
      label: {
        text: 'Gender',
        styles: {},
        classes: ['text-primary']
      },
      name: 'gender',
      options: [
        {
          label: 'Male',
          checked: false,
          styles: {},
          classes: []
        },
        {
          label: 'Female',
          checked: false,
          styles: {},
          classes: []
        }
      ],
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Gender Required'
        }
      ]
    },
    {
      type: 'checkbox',
      label: {
        text: 'Category:',
        styles: {},
        classes: ['text-primary']
      },
      name: 'category',
      value: false,
      options: [
        {
          label: 'FOCA',
          checked: true,
          styles: {
            'text-decoration': 'underline'
          },
          classes: ['text-primary']
        }, {
          label: 'LOCA',
          checked: false,
          styles: {},
          classes: []
        }
      ]
    },
    {
      type: 'checkbox',
      label: {
        text: 'Service:',
        styles: {},
        classes: ['text-primary']
      },
      name: 'service',
      value: false,
      options: [
        {
          label: 'Schedule',
          checked: true,
          styles: {},
          classes: []
        }, {
          label: 'Charter',
          checked: false,
          styles: {},
          classes: []
        },
        {
          label: 'Cargo',
          checked: false,
          styles: {},
          classes: []
        }
      ]
    },
    {
      type: 'heading',
      label: {
        text: 'Part B: Claim details',
        styles: {
          'font-size': '20px',
          'font-weight': '600',
          'text-decoration': 'underline',
          'text-transform': 'uppercase',
        },
        classes: []
      }
    },
    {
      type: 'heading',
      label: {
        text: 'Activity: News Paper Advertisement and KULMATTA Fair',
        styles: {
          'font-size': '15px',
          'font-weight': '600',
          'text-decoration': 'underline'
        },
        classes: []
      }
    },
    {
      type: 'heading',
      label: {
        text: 'Duration: Jully until Sempetember 2018',
        styles: {
          'font-size': '15px',
          'font-weight': '600',
        },
        classes: []
      }
    },
    {
      type: 'checkbox',
      label: {
        text: 'Pay To:',
        styles: {},
        classes: ['text-primary']
      },
      name: 'payto',
      value: false,
      options: [
        {
          label: 'Airline',
          checked: true,
          styles: {},
          classes: []
        }, {
          label: 'Appointed Vendor',
          checked: false,
          styles: {},
          classes: []
        }
      ]
    },
    {
      type: 'heading',
      label: {
        text: 'Amount: RM26,500.00',
        styles: {
          'font-size': '15px',
          'font-weight': '600',
        },
        classes: []
      }
    },
    {
      type: 'heading',
      label: {
        text: 'Available Balance: RM23,500.00',
        styles: {
          'font-size': '15px',
          'font-weight': '600',
        },
        classes: []
      }
    },
    {
      type: 'heading',
      label: {
        text: 'Part C: Document Checklist',
        styles: {
          'font-size': '20px',
          'font-weight': '600',
          'text-decoration': 'underline',
          'text-transform': 'uppercase',
        },
        classes: []
      }
    },
    {
      type: 'checkbox',
      name: 'documentChecklist',
      value: false,
      options: [
        {
          label: 'Proof of Undertaken Activities',
          checked: false,
          styles: {},
          classes: []
        }, {
          label: 'Invoice',
          checked: false,
          styles: {},
          classes: []
        },
        {
          label: 'Receive Payment Proof',
          checked: false,
          styles: {},
          classes: []
        },
        {
          label: 'Letter of Appointment from Airlines',
          checked: false,
          styles: {},
          classes: []
        },
        {
          label: 'Account Details',
          checked: false,
          styles: {},
          classes: []
        }
      ],
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Documents checklist Required'
        }
      ]
    },
    {
      type: 'button',
      buttonType: 'submit',
      label: {
        text: 'Save',
        styles: {},
        classes: ['btn', 'btn-primary', 'btn-sm']
      },
      classes: []
    },
    {
      type: 'button',
      buttonType: 'reset',
      label: {
        text: 'Reset',
        styles: {},
        classes: ['btn', 'btn-info', 'btn-sm']
      },
      classes: []
    }
  ];

  submit(value: any) {
    console.log('Form Data', value);
  }
}
