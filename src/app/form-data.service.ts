import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  formData: any;

  checkBoxValidity(name: string) {
    if (this.formData[name].length == 0){
      return true; //field invalid
    }else {
      return false; //field valid
    }
  }

  radioButtonValidity(name: string) {
    if (this.formData[name] === ''){
      return true; //field invalid
    }else {
      return false; //field valid
    }
  }
}
