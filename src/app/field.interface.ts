export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface Label {
  text: string,
  styles: any,
  classes: string[]
}

export interface Option {
  label: string,
  checked: boolean
  styles: any,
  classes: string[]
}

export interface InputType {
  type: string,
  styles: any,
  classes: string[]
}

export interface FieldConfig {
  label?: Label;
  name?: string;
  inputType?: InputType;
  options?: Option[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  styles?: any;
  classes?: string[];
  placeholder? :string;
}
