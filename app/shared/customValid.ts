import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {
    constructor(){
    }

  static pastDateValid(nameRe: Date,type:boolean): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const val =name < new Date();
      const f=val ? {'forbiddenName': {name}} : null;
      
      if(!type)
        return null;

      if(name instanceof Date && typeof name !=='undefined' && name < new Date())

        return val ? {'forbiddenName': {name}} : null;
    };
  }


}
