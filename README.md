Angular dynamic form is component using which you can generate Angular Forms without having to code explicitly but by just providing a JSON array. You also have provision to style the form according to you by providing the bootstrap classes and css styles.

## Dependency
Bootstrap 4 is necessary for this component.
- Add below bootstrap 4 CDN url in the index.html
```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous">
```
- Or Follow insrtuction on the below page
```
https://www.talkingdotnet.com/add-bootstrap-4-to-angular-6-application/
```


## Input Output
Provide a json which is used as configuration to create Angular Forms dynamically at run time. Output will be the values selected or entered by the user.

## Usage

```
<dynamic-form [fields]="regConfig" (submit)="submit($event)">
</dynamic-form>```
```
- dynamic-form is the component that creates the form at runtime.
- [fields] is the input configuration json.
- (submit) is the output event.

## Format of input [fields]
```
{
  label?: {
        text: string,
        styles: any,
        classes: string[]
    };
  name?: string;
  inputType?: {
        type: string,
        styles: any,
        classes: string[]
    };
  options?: {
        label: string,
        checked: boolean
        styles: any,
        classes: string[]
    }[];
  collections?: any;
  type: string;
  value?: any;
  validations?: {
        name: string;
        validator: any;
        message: string;
    }[];
  styles?: any;
  classes?: string[];
  placeholder? :string;
  buttonType?: string;
}
```
## Example
```
[
    {   //For input type text
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
    {   //For heading
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
    {   //For input type date
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
    {   //For input type radio 
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
    {   //For input type checkbox
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
            }, 
            {
                label: 'LOCA',
                checked: false,
                styles: {},
                classes: []
            }
        ]
    },
    {   //For button type submit
        type: 'button',
        buttonType: 'submit',
        label: {
            text: 'Save',
            styles: {},
            classes: ['btn', 'btn-primary', 'btn-sm']
        },
        classes: []
    },
    {   //For button type reset
        type: 'button',
        buttonType: 'reset',
        label: {
            text: 'Reset',
            styles: {},
            classes: ['btn', 'btn-info', 'btn-sm']
        },
        classes: []
    }
]
```
