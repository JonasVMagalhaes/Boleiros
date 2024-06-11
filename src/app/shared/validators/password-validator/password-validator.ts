import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Validates the password based on the following criteria:
 * - Minimum length of 8 characters
 * - Maximum length of 100 characters
 * - Must contain at least one number
 * - Must contain at least one lowercase letter
 * - Must contain at least one uppercase letter
 * - Must contain at least one special character
 * - Cannot contain whitespace
 * - Cannot be a common password (e.g. "password", "123456", "qwerty", etc.)
 * 
 * @returns A validator function that checks if the password meets the specified criteria.
 */
export function passwordValidator(): ValidatorFn {
    const minLength = 8;
    const maxLength = 100;
    const mustBeContainNumber = true;
    const mustBeContainLowercase = true;
    const mustBeContainUppercase = true;
    const mustBeContainSpecialCharacter = true;
    
    return (control: AbstractControl): { [key: string]: any } | null => {
        const password = control.value;

        if(!password) {
            // If the password is empty, return an error indicating that it is required
            return { 'passwordRequired': true };        
        };

        if (password.length < minLength) {
            // If the password is shorter than the minimum length, return an error indicating it is too short
            return { 'passwordTooShort': true };
        }

        if (password.length > maxLength) {
            // If the password is longer than the maximum length, return an error indicating it is too long
            return { 'passwordTooLong': true };
        }

        if (mustBeContainNumber && !/\d/.test(password)) {
            // If the password must contain a number and it doesn't, return an error indicating it is missing a number
            return { 'passwordNumber': true };
        }

        if (mustBeContainLowercase && !/[a-z]/.test(password) ) {
            // If the password must contain a lowercase letter and it doesn't, return an error indicating it is missing a lowercase letter
            return { 'passwordLowercase': true };
        }

        if (mustBeContainUppercase && !/[A-Z]/.test(password)) {
            // If the password must contain an uppercase letter and it doesn't, return an error indicating it is missing an uppercase letter
            return { 'passwordUppercase': true };
        }

        if (mustBeContainSpecialCharacter && !/\W/.test(password)) {
            // If the password must contain a special character and it doesn't, return an error indicating it is missing a special character
            return { 'passwordSpecialCharacter': true };
        }

        if (password.includes(" ")) {
            // If the password contains whitespace, return an error indicating it cannot contain whitespace
            return { 'passwordWhitespace': true };
        }

        if (/password/i.test(password)) {
            // If the password is a common password, return an error indicating it is a common password
            return { 'passwordCommon': true };
        }

        if (/123456/i.test(password)) {
            // If the password is a common password, return an error indicating it is a common password
            return { 'passwordCommon': true };
        }

        if (/qwerty/i.test(password)) {
            // If the password is a common password, return an error indicating it is a common password
            return { 'passwordCommon': true };
        }

        if (/abc123/i.test(password)) {
            // If the password is a common password, return an error indicating it is a common password
            return { 'passwordCommon': true };
        }

        if (/password123/i.test(password)) {
            // If the password is a common password, return an error indicating it is a common password
            return { 'passwordCommon': true };
        }   
                  
        return null;
    };
}