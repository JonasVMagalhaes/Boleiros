import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
    public static strong(): ValidatorFn {
        const passwordSize: number = 6;
        const regexLowercase: RegExp = /[a-z]/;
        const regexUppercase: RegExp = /[A-Z]/;
        const regexNumber: RegExp = /\d/;
        const regexEspecialCharacter: RegExp = /[\W_]/;
        
        const validatePasswordSize: boolean = true;
        const validateHasLowercase: boolean = true;
        const validateHasUppercase: boolean = true;
        const validateHasNumber: boolean = true;
        const validateHasEspecialCharacter: boolean = false;

        return (control: AbstractControl): ValidationErrors | null => {
            const password: string = control.value;
            const errors: ValidationErrors = {};
        
            if (validatePasswordSize && (!password || password.length < passwordSize)) {
              errors['minLength'] = true;
            }
        
            if (validateHasLowercase && !regexLowercase.test(password)) {
              errors['lowercaseMissing'] = true;
            }
        
            if (validateHasUppercase && !regexUppercase.test(password)) {
              errors['uppercaseMissing'] = true;
            }
        
            if (validateHasNumber && !regexNumber.test(password)) {
              errors['numberMissing'] = true;
            }

            if (validateHasEspecialCharacter && !regexEspecialCharacter.test(password)) {
                errors['especialCharacterMissing'] = true;
              }
        
            return Object.keys(errors).length ? errors : null;
          };
    }
}
